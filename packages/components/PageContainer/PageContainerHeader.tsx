import { PropType, defineComponent } from "vue";
import { PageContainerBreadcrumb, PageContainerProps } from "./types"
import { Breadcrumb, BreadcrumbItem, BreadcrumbItemProps } from 'tdesign-vue-next';
import { VueNode, isFunction } from "@tdesign-pro-component/utils";
export const PageContainerHeader = defineComponent({
    name: 'PageContainerHeader',
    props: {
        title: [String, Function, Object] as PropType<VueNode>,
        actions: [Function, Object] as PropType<VueNode>,
        breadcrumb: Array as PropType<{ path: string, title: string, icon?: string | VueNode }[]>
    },
    setup(props: PageContainerProps['header'], { slots, emit }) {

        const NODETYPE = ['string', 'object'];

        const RenderActions = () => {
            if (slots.actions) {
                return slots.actions();
            }

            if (!props.actions) {
                return void 0;
            }

            if (isFunction(props.actions)) {
                return (props.actions as Function)();
            }

            return props.actions;
        }

        function handleBreadcrumbItemClick(path: string, item: PageContainerBreadcrumb) {
            emit('breadcrumbClick', path, item);
        }

        return () => <div>
            {
                props.breadcrumb && <Breadcrumb class="page-container-header-breadcrumb">
                    {
                        props.breadcrumb.items.map(item => <BreadcrumbItem onClick={() => handleBreadcrumbItemClick(item.path, item)} {...item}>
                            {{
                                icon: item.icon ? (isFunction(item.icon) ? (item.icon as Function)() : item.icon) : void 0,
                                default: () => <span>{item.title}</span>
                            }}

                        </BreadcrumbItem>)
                    }
                </Breadcrumb>
            }

            <div class="page-container-header-content">
                <div class="page-container-header-content-title">
                    {props.title && NODETYPE.includes(typeof props.title) ? props.title : (props as any).title()}
                </div>
                <div class="page-container-header-content-actions">
                    <RenderActions />
                </div>
            </div>
        </div>
    }
})
