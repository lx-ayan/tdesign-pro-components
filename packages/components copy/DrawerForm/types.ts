import { VueNode } from "@tdesign-pro-component/utils";
import { ProFormOption, ProFormProps } from "../ProForm";
import { DrawerProps } from "tdesign-vue-next";

export interface DrawerFormProps<T = any> {
    title: string | VueNode;
    visible: boolean;
    options: ProFormOption<T>[];
    request?: ProFormProps['request'];
    formProps?: ProFormProps<T>;
    drawerProps?: DrawerProps;
    footer?: string | VueNode;
    width?: string | number;
}