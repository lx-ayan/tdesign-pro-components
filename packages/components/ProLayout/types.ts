import { WithFalse } from "@tdesign-pro-component/utils";
import { MenuProps } from "tdesign-vue-next";
import { VNode } from "vue";

export interface ProLayoutProps {
    headerRender?: WithFalse<(props: ProLayoutProps) => VNode>;
    logoRender?: WithFalse<(props: ProLayoutProps) => VNode>;
    actionsRender?: WithFalse<(props: ProLayoutProps) => VNode>;
    asideRender?: WithFalse<(props: ProLayoutProps) => VNode>;
    footerRender?: WithFalse<(props: ProLayoutProps) => VNode>;
    routes?: ProLayoutRoute[];
    routeGroup?: boolean;
    collapsed?: boolean;
    menuTheme?: 'light' | 'dark';
    menuProps?: MenuProps;
    onClick: (path: string, route: ProLayoutRoute) => void
}

export interface ProLayoutRoute {
    title: string | (() => VNode);
    path: string;
    icon?: string | (() => VNode);
    disabled?: boolean;
    children?: ProLayoutRoute[]
}