import { TdDrawerProps } from "tdesign-vue-next";
import { ProFormOption, ProFormProps } from "../ProForm";

export interface DrawerFormProps {
    options: ProFormOption[];
    request?: ProFormProps['request'];
    title?: TdDrawerProps['header'];
    formProps?: ProFormProps;
    drawerProps?: TdDrawerProps;
}