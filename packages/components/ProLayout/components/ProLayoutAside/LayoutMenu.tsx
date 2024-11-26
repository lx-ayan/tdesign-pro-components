import { PropType, defineComponent, ref } from "vue";
import { ProLayoutProps, ProLayoutRoute } from "../../types";
import { Menu, MenuItem, Submenu, MenuGroup } from 'tdesign-vue-next';

export const LayoutMenu = defineComponent({
    name: 'LayoutMenu',
    props: {
        routes: {
            type: Array as PropType<ProLayoutRoute[]>,
            default: () => []
        },
        routeGroup: {
            type: Boolean,
            default: false
        },
        menuTheme: String,
        menuProps: Object
    },
    setup(props: ProLayoutProps, { emit, expose }) {

        const innerCollapsed = ref(false);

        function handleClick(path: string, route: ProLayoutRoute) {
            emit('click', path, route);
        }

        expose({
            setCollapsed: (value: boolean) => innerCollapsed.value = value,
        });

        const RenderMenu = ({ routes }) => {

            return <>
                {
                    routes.map((route, index) => {
                        return (route.children && route.children.length > 0) ? (
                            props.routeGroup?
                            <MenuGroup 
                            key={route.path}
                            title={typeof route.title === 'string' ? route.title : route.title()}
                            value={route.path}>
                                <RenderMenu routes={route.children}></RenderMenu>
                            </MenuGroup>:
                            <Submenu
                            disabled={route.disabled}
                            icon={route.icon && (typeof route.icon === 'string' ? <t-icon name={route.icon}></t-icon> : route.icon())}
                            key={route.path}
                            title={typeof route.title === 'string' ? route.title : route.title()}
                            value={route.path}>
                            <RenderMenu routes={route.children}></RenderMenu>
                        </Submenu>
                        )
                        :
                            <MenuItem
                                disabled={route.disabled}
                                key={route.path}
                                value={route.path}
                                icon={route.icon && (typeof route.icon === 'string' ? <t-icon name={route.icon}></t-icon> : route.icon())}
                                onClick={() => handleClick(route.path, route)}
                            >
                                <span>{typeof route.title === 'string' ? route.title : route.title()}</span>
                            </MenuItem>
                    })
                }
            </>
        }

        return () => <>
            <Menu {...props.menuProps} theme={props.menuTheme} v-model:collapsed={innerCollapsed.value}>
                <RenderMenu routes={props.routes} />
            </Menu>
        </>
    }
});

