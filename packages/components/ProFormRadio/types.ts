import { BasicValueType, Optional, OptionData, PromiseFunction, VueNode } from "@tdesign-pro-component/utils";
import { FormItemProps, FormRule, RadioProps } from "tdesign-vue-next";

export interface ProFormRadioProps {
    name: string;
    modelValue: BasicValueType | BasicValueType[];
    data: any[] | PromiseFunction<any[]>;
    labelName?: string;
    valueName?: string;
    label?: string | VueNode;
    rules?: FormRule[];
    formItemProps?: FormItemProps;
    placeholder?: string;
    readonly?: boolean;
    disabled?: boolean;
    direction?: 'vertical' | 'horizontal';
    loadingText?: string | VueNode;
    radioProps?: RadioProps | Optional<TagRadioProps, 'data'>;
}

export interface TagRadioProps {
    data: OptionData[];
    direction?: 'vertical' | 'horizontal';
    onChange?: (value: BasicValueType) => void;
    modelValue?: BasicValueType;
    gap?: string;
    fill?: boolean;
    updateColor?: boolean;
}