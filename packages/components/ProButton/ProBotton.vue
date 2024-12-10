<script setup lang="tsx">
import { getSlots } from '@tdesign-pro-component/utils';
import { ProButtonEmits, ProButtonProps, ProButtonSlots, ProButtonRef } from './types';
import { useVModel } from '@tdesign-pro-component/hooks';

defineOptions({ name: 'ProButton' });

const props = withDefaults(defineProps<ProButtonProps>(), {
    theme: 'button',
    action: 'dialog',
    visible: false,
    colorTheme: 'primary',
    linkHover: 'color'
});

const slots = defineSlots<ProButtonSlots>();

const emits = defineEmits<ProButtonEmits>();

const visible = useVModel(props, 'visible', emits, props.visible);

const Content = getSlots(slots, props, 'content');

const Title = getSlots(slots, props, 'title');

const ConfirmBtn = getSlots(slots, props, 'confirmBtn');

const CancelBtn = getSlots(slots, props, 'cancelBtn');

const SuffixIcon = getSlots(slots, props, 'suffixIcon');

const Icon = getSlots(slots, props, 'icon');

function handleClick() {
    emits('click');
    visible.value = true;
}

const ButtonOrLink = () => {
    return props.theme !== 'link' ? <t-button theme={props.colorTheme} icon={() => Icon} {...props.buttonProps} onClick={handleClick}>
        {{
            default: () => slots.default ? (slots.default as Function)() : '高级按钮',
            icon: slots.icon ? slots.icon as Function : null
        }}
    </t-button> : <t-link hover={props.linkHover} onClick={handleClick} prefixIcon={() => Icon} suffixIcon={() => SuffixIcon} theme={props.colorTheme} {...props.linkProps}>
        {{
            default: () => slots.default ? (slots.default as Function)() : '高级连接',
            prefixIcon: slots.icon ? slots.icon as Function : null,
            suffixIcon: slots.suffixIcon? (slots.suffixIcon as Function): null
        }}
    </t-link>
}

function handleClose(v: any) {
    visible.value = false;
    emits('close', v);
}

function handleCancel() {
    visible.value = false;
    emits('cancel');
}

function handleConfirm() {
    emits('confirm');
}

const RenderDialog = () => {
    return <>
        <ButtonOrLink />
        <t-dialog confirmBtn={ConfirmBtn} cancelBtn={CancelBtn} onOpened={() => handleVisibleChange(true)} onConfirm={handleConfirm} onCancel={handleCancel} onClose={(v: any) => handleClose(v)} visible={visible.value} {...props.dialogProps}>
            {{
                default: () => Content,
                header: () => Title,
                confirmBtn: slots.confirmBtn ? () => ConfirmBtn : null,
                cancelBtn: slots.cancelBtn ? () => CancelBtn : null,
            }}
        </t-dialog>
    </>
}

function handleVisibleChange(v: boolean) {
    if (!v) {
        handleClose(v);
    } else {
        emits('open');
    }
}

const RenderPopup = () => {
    return <t-popconfirm confirmBtn={ConfirmBtn} cancelBtn={CancelBtn} onVisibleChange={(v: boolean) => handleVisibleChange(v)} onConfirm={handleConfirm} onCancel={handleCancel} onUpdate:visible={visible.value} {...props.popupProps}>
        {{
            content: () => Content,
            default: () => <ButtonOrLink />,
            confirmBtn: slots.confirmBtn ? () => ConfirmBtn : null,
            cancelBtn: slots.cancelBtn ? () => CancelBtn : null,
        }}
    </t-popconfirm>
}

defineExpose<ProButtonRef>({
    open: () => visible.value = true,
    close: () => visible.value = false
})
</script>

<template>
    <RenderDialog v-if="props.action !== 'popup'">

    </RenderDialog>

    <RenderPopup v-else>

    </RenderPopup>
</template>