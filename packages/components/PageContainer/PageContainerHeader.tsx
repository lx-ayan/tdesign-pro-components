import { PropType, defineComponent } from "vue";
import { PageContainerBreadcrumb, PageContainerProps } from "./types"
import { Breadcrumb, BreadcrumbItem } from 'tdesign-vue-next';
import { VueNode, WithFalse, getSlots, isFunction } from "@tdesign-pro-component/utils";
export const PageContainerHeader = defineComponent({
    name: 'PageContainerHeader',
    props: {
        title: [String, Function, Object] as PropType<VueNode>,
        actions: [Function, Object] as PropType<VueNode>,
        breadcrumb: Array as PropType<{ path: string, title: string, icon?: string | VueNode }[]>,
        description: [String, Function, Object, Boolean] as PropType<WithFalse<VueNode>>
    },
    setup(props: PageContainerProps['header'], { slots, emit }) {

        function handleBreadcrumbItemClick(path: string, item: PageContainerBreadcrumb) {
            emit('breadcrumbClick', path, item);
        }

        const RenderTitle = getSlots<PageContainerProps['header']>(slots, props, 'title');

        const RenderActions = getSlots<PageContainerProps['header']>(slots, props, 'actions');
        const RenderDescription = getSlots<PageContainerProps['header']>(slots, props, 'description');

        return () => <div>
            {
                props.breadcrumb && <Breadcrumb class="page-container-header-breadcrumb">
                    {
                        props.breadcrumb.items.map((item: any) => <BreadcrumbItem onClick={() => handleBreadcrumbItemClick(item.path, item)} {...item as any}>
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
                    {RenderTitle}
                </div>
                {
                    (props.actions || slots.actions) && <div class="page-container-header-content-actions">
                        {RenderActions}
                    </div>
                }
            </div>

            {
                (props.description || slots.description) && <div class="page-container-header-description">
                    {RenderDescription}
                </div>
            }
        </div>
    }
})