import { VueNode, WithFalse } from "@tdesign-pro-component/utils/types";
import { BreadcrumbItemProps, LoadingProps, TabsProps } from "tdesign-vue-next";

export interface PageContainerProps {
    header?: PageContainerHeaderProps;
    tabList?: {
        value: string;
        label: string | VueNode;
        closeable?: boolean;
        disabled?: boolean;
    }[];
    loading?: {
        status: boolean;
        text?: WithFalse<VueNode>;
        loadingProps: LoadingProps;
    },
    tabActiveKey?: string;
    tabBarExtraContent?: VueNode;
    tabsProps?: TabsProps;
    content?: VueNode;
    footer?: WithFalse<VueNode>;
    bodyBordered?: boolean;
}

export interface PageContainerBreadcrumb {
    path: string;
    title: string;
    icon?: string | VueNode;
    to?: BreadcrumbItemProps['to'];
    replace?: boolean;
    target: BreadcrumbItemProps['target'],
    disabled?: boolean;
}

export interface PageContainerHeaderProps {
    title: string | VueNode;
    actions?: VueNode;
    breadcrumb?: WithFalse<{
        items: PageContainerBreadcrumb[]
    }>;
}

export interface PageContainerEmit {
    (e: 'tabChange', key: string): void;
    (e: 'breadcrumbClick', key: string, item: PageContainerBreadcrumb): void;
}