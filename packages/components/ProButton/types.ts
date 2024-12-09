import { VueNode, WithFalse } from "@tdesign-pro-component/utils";
import { ButtonProps, DialogProps, LinkProps, PopconfirmProps, SizeEnum, } from "tdesign-vue-next";

export interface ProButtonProps {
    theme?: 'button' | 'link';
    action?: 'popup' | 'dialog';
    visible?: boolean;
    content?: WithFalse<VueNode>;
    title?: string | WithFalse<VueNode>;
    dialogProps?: DialogProps;
    popupProps?: PopconfirmProps;
    confirmBtn?: WithFalse<VueNode>;
    cancelBtn?: WithFalse<VueNode>;
    buttonProps?: ButtonProps;
    linkProps?: LinkProps;
    colorTheme?: ButtonProps['theme'];
    linkHover?: LinkProps['hover'];
    size?: SizeEnum;
}

export interface ProButtonSlots {
    default?: WithFalse<VueNode>;
    content?: WithFalse<VueNode>;
    title?: WithFalse<VueNode>;
    confirmBtn?: WithFalse<VueNode>;
    cancelBtn?: WithFalse<VueNode>;
    icon?: WithFalse<VueNode>;
    suffixIcon?: WithFalse<VueNode>;
}

export interface ProButtonEmits {
    (e: 'click'): void;
    (e: 'open', visible?: boolean): void;
    (e: 'close', visible?: boolean): void;
    (e: 'confirm'): void;
    (e: 'cancel'): void;
    (e: 'update:visible', v: boolean): void;
}

export interface ProButtonRef {
    open: () => void;
    close: () => void;
}