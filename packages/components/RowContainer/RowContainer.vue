<script setup lang='tsx'>
import { computed } from 'vue';
import { RowContainerProps, RowContainerSlots } from './types';
import { getSlots } from '@tdesign-pro-component/utils';

defineOptions({ name: 'RowContainer' });

const props = withDefaults(defineProps<RowContainerProps>(), {
    imageAlign: 'left',
    imageWidth: '260px',
    imageHeight: '100%'
});

const slots = defineSlots<RowContainerSlots>();

const Image = getSlots(slots, props, 'image');

const Title = getSlots(slots, props, 'title');
const Actions = getSlots(slots, props, 'actions');
const Description = getSlots(slots, props, 'description');
const Footer = getSlots(slots, props, 'footer');



const imageWidth = computed(() => {
    return (props.imageWidth + '').includes('px') ? props.imageWidth + '' : `${props.imageWidth}px`
});

const imageMargin = computed(() => {
    return props.imageAlign === 'right' ? { marginLeft: '12px' } : { marginRight: '12px' }
});

const RenderImage = () => {
    if (typeof props.image === 'string') {
        if (props.imageView) {
            return <div class="row-container-image" style={{ ...imageMargin.value }}>
                <t-image-viewer images={[props.image]}>
                    {{
                        trigger: ({ open }: any) => <div class="tdesign-demo-image-viewer__ui-image">
                            <img alt="test" style={{ height: props.imageHeight, width: imageWidth.value, ...props.imageStyle  }} src={props.image as string} class="tdesign-demo-image-viewer__ui-image--img" />
                            <div class="tdesign-demo-image-viewer__ui-image--hover" onClick={() => open()}>
                                <t-icon name="browse" size="1.1em" style={{ marginRight: '4px' }} /><span>预览</span>
                            </div>
                        </div>
                    }}
                </t-image-viewer>
            </div >
        } else {
            return <div class="row-container-image" style={{ width: imageWidth.value, ...imageMargin.value }}>
                <img src={props.image} style={{ width: imageWidth.value, height: props.imageHeight, ...props.imageStyle }} ></img>
            </div>
        }
    }
    return <div class="row-container-image" style={{ width: imageWidth.value, ...imageMargin.value }}>{Image}</div>
}

const RenderTitle = () => {
    return Title;
}

const RenderDescription = () => {
    return Description;
}

const RenderActions = () => {
    return Actions;
}

const RenderFooter = () => {
    return Footer;
}

</script>

<template>
    <div class="row-container">
        <RenderImage v-if="props.imageAlign === 'left'"></RenderImage>
        <div class="row-container-content">
            <div>
                <div class="row-container-content-header">
                    <div class="row-container-content-header-title">
                        <RenderTitle />
                    </div>

                    <div class="row-container-content-header-actions">
                        <RenderActions />
                    </div>
                </div>
                <div class="row-container-content-description">
                    <RenderDescription />
                </div>
            </div>
            <div class="row-container-content-footer">
                <RenderFooter />
            </div>
        </div>
        <RenderImage v-if="props.imageAlign === 'right'"></RenderImage>

    </div>
</template>

<style lang='scss'>
.row-container {
    background-color: var(--td-bg-color-container);
    display: flex;
    justify-content: space-between;
}

.row-container-content {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.row-container-content-header {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    text-wrap: wrap;
    flex-wrap: wrap;
    justify-content: space-between;
}

.row-container-content-header-title {
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 600;
    overflow: hidden;
    flex-wrap: wrap;
    text-wrap: wrap;
    font-size: 23px;
    line-height: 23px;
    max-width: 70%;
}

.row-container-content-description {
    margin-bottom: 12px;
    text-wrap: wrap;
    flex-wrap: wrap;

}

.row-container-content-header-actions {
    overflow: hidden;
}

.tdesign-demo-image-viewer__ui-image {
    width: 100%;
    height: 100%;
    display: inline-flex;
    position: relative;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.tdesign-demo-image-viewer__ui-image--hover {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.6);
    color: var(--td-text-color-anti);
    line-height: 22px;
    transition: 0.2s;
}

.tdesign-demo-image-viewer__ui-image:hover .tdesign-demo-image-viewer__ui-image--hover {
    opacity: 1;
    cursor: pointer;
}

.tdesign-demo-image-viewer__ui-image--img {
    cursor: pointer;
}

.tdesign-demo-image-viewer__ui-image--title {
    flex: 1;
}

.tdesign-demo-popup__reference {
    margin-left: 16px;
}

.tdesign-demo-image-viewer__ui-image--icons .tdesign-demo-icon {
    cursor: pointer;
}
</style>