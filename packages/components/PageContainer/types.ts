import { VueNode, WithFalse } from "@tdesign-pro-component/utils/types";
import { TabsProps } from "tdesign-vue-next";

export interface PageContainerProps {
    header?: PageContainerHeaderProps;
    tabList?: {
        key: string;
        tab: string | VueNode;
        closeable?: boolean;
        disabled?: boolean;
    }[];
    tabActiveKey?: string;
    tabBarExtraContent?: VueNode;
    tabProps?: TabsProps;
    content?: VueNode;
    footer?: WithFalse<VueNode>;
}

export interface PageContainerHeaderProps {
    title: string | VueNode;
    extra: VueNode[];
    breadcrumb?: WithFalse<{
        items: { path: string, title: string, icon?: string | VueNode }[]
    }>;
}

export interface PageContainerEmit {
    (e: 'tabChange', key: string): void;
}