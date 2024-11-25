import { PropType, defineComponent } from "vue";
import { Layout, Content, Header, Aside } from "tdesign-vue-next";
import { ProLayoutHeader } from "./components/Header/Header";
import { ProLayoutProps } from "./types";
const ProLayoutComponent = defineComponent({
    props: {
        headerRender: {
            type: Boolean as PropType<ProLayoutProps['headerRender']>,
            default: false
        },
        logoRender: {
            type: Boolean as PropType<ProLayoutProps['logoRender']>,
            default: false
        },
        actionRender: {
            type: Boolean as PropType<ProLayoutProps['actionsRender']>,
            default: false
        },
        asideRender: {
            type: Boolean as PropType<ProLayoutProps['asideRender']>,
            default: false
        }
    },
    setup(props, { slots, emit, expose }) {

        const HeaderRender = () => {
            return <ProLayoutHeader {...props}>
                {{
                    logo: slots.logo ? () => slots.logo() : (props.logoRender ? props.logoRender(props) : null),
                    default: () => props.headerRender ? props.headerRender(props) : null,
                    actions: slots.actions ? () => slots.actions() : (props.actionRender ? props.actionRender(props) : null),
                }}
            </ProLayoutHeader>;
        }

        const AsideRender = () => {
            if (!props.asideRender) {
                return void 0;
            }
            return props.asideRender(props);
        }

        return () => <Layout style={{ minHeight: '100%', minWidth: '100%' }}>
            {{
                default: () => <>
                    {slots.header ? slots.header() : props.headerRender && <HeaderRender />}
                    <Layout>
                        {
                            slots.aside ? <Aside>
                                {slots.aside()}
                            </Aside> : <AsideRender />
                        }

                        <Content>
                            {slots.default()}
                        </Content>
                    </Layout>
                </>
            }}
        </Layout>
    }
});

export default ProLayoutComponent;