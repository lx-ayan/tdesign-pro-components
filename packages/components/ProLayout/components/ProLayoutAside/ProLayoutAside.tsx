import { Aside } from "tdesign-vue-next"
import { PropType, defineComponent, ref, watch } from "vue"
import { ProLayoutProps, ProLayoutRoute } from "../../types"
import { LayoutMenu } from './LayoutMenu';

export const ProLayoutAside = defineComponent({
    name: 'ProLayoutAside',
    props: {
        routes: {
            type: Array as PropType<ProLayoutRoute[]>,
            default: () => []
        },
        routeGroup: {
            type: Boolean
        },
        menuTheme: {
            type: String,
            default: 'light'
        },
        menuProps: Object
    },
    setup(props: ProLayoutProps, { slots, emit, expose }) {
        const menuRef = ref<any>();

        expose({
            setCollapsed: (value) => menuRef.value.setCollapsed(value)
        })

        function handleClick(path: string, route: ProLayoutRoute) {
            emit('menuClick', path, route)
        }

        return () => <Aside style={{ width: 'auto' }}>
            {
                (props.routes && props.routes.length) ? <LayoutMenu ref={menuRef} onClick={handleClick} {...props} /> : slots.default()
            }
        </Aside>
    }
})