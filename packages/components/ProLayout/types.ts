import { WithFalse } from "@tdesign-pro-component/utils";
import { VNode } from "vue";

export interface ProLayoutProps {
    headerRender?: WithFalse<(props: ProLayoutProps) => VNode>;
    logoRender?: WithFalse<(props: ProLayoutProps) => VNode>;
    actionsRender?: WithFalse<(props: ProLayoutProps) => VNode>;
    asideRender?: WithFalse<(props: ProLayoutProps) => VNode>;
}