import { PropType, defineComponent, ref } from "vue";
import { Layout, Content, Header, Aside, Footer } from "tdesign-vue-next";
import { ProLayoutHeader } from "./components/ProLayoutHeader/ProLayoutHeader";
import { ProLayoutProps, ProLayoutRoute } from "./types";
import { ProLayoutAside } from "./components/ProLayoutAside/ProLayoutAside";
const ProLayoutComponent = defineComponent({
    props: {
        headerRender: {
            type: [Boolean, Function] as PropType<ProLayoutProps['headerRender']>,
            default: false
        },
        logoRender: {
            type: [Boolean, Function] as PropType<ProLayoutProps['logoRender']>,
            default: false
        },
        actionRender: {
            type: [Boolean, Function] as PropType<ProLayoutProps['actionsRender']>,
            default: false
        },
        asideRender: {
            type: [Boolean, Function] as PropType<ProLayoutProps['asideRender']>,
            default: false
        },
        routes: {
            type: Array as PropType<ProLayoutRoute[]>
        },
        routeGroup: {
            type: Boolean
        },
        menuTheme: String,
        menuProps: Object
    },
    setup(props: ProLayoutProps, { slots, emit, expose }) {
        const asideRef = ref<any>();

        const HeaderRender = () => {
            return <ProLayoutHeader {...props}>
                {{
                    logo: slots.logo ? () => slots.logo() : (props.logoRender ? props.logoRender(props) : null),
                    default: () => props.headerRender ? props.headerRender(props) : null,
                    actions: slots.actions ? () => slots.actions() : (props.actionsRender ? props.actionsRender(props) : null),
                }}
            </ProLayoutHeader>;
        }


        const AsideRender = () => {
            if (!props.asideRender && !props.routes) {
                return void 0;
            }
            return <ProLayoutAside ref={asideRef} onMenuClick={handleMenuClick} {...props}>
                {(props as any).asideRender(props)}
            </ProLayoutAside>;
        }

        const FooterAside = () => {
            if (slots.footer) {
                return <Footer>{slots.footer()}</Footer>;
            }

            if (!props.footerRender) {
                return void 0;
            }

            return <Footer>
                {props.footerRender(props)}
            </Footer>
        }

        function handleMenuClick(path: string, route: ProLayoutRoute) {
            emit('menuClick', path, route);
        }

        expose({
            setCollapsed: (value) => asideRef.value.setCollapsed(value)
        });

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

                        <Layout>
                            <Content>
                                {slots.default()}
                            </Content>

                            <FooterAside />
                        </Layout>
                    </Layout>

                </>
            }}

        </Layout>
    }
});

export default ProLayoutComponent;