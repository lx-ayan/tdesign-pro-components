import { VueNode, WithFalse } from "@tdesign-pro-component/utils";
import { CSSProperties } from "vue";

export interface RowContainerProps {
    image?: string | WithFalse<VueNode>;
    title?: string | WithFalse<VueNode>;
    actions?: WithFalse<VueNode>;
    description?: WithFalse<VueNode>;
    footer?: WithFalse<VueNode>;
    imageAlign?: 'left' | 'right';
    imageStyle?: CSSProperties;
    imageWidth?: number | string;
    imageView?: boolean;
    imageHeight?: string;
}

export interface RowContainerSlots {
    image?: WithFalse<VueNode>;
    title?: WithFalse<VueNode>;
    actions?: WithFalse<VueNode>;
    description?: WithFalse<VueNode>;
    footer?: WithFalse<VueNode>;
}
