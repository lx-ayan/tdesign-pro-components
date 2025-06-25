<script setup lang='tsx'>
import { useVModel } from '@tdesign-pro-component/hooks';
import './index.css';
import ProLayoutComponent from './ProLayoutComponent';
import { ProLayoutProps } from './types';
import { ref, watch } from 'vue';
defineOptions({
    name: 'ProLayout'
}); 
const slots = defineSlots();
const props = defineProps<ProLayoutProps>();
const emits = defineEmits();

const innerCollapsed = useVModel(props, 'collapsed', emits, false);

const layoutRef = ref<any>();

watch(innerCollapsed, (value) => {
    layoutRef.value.setCollapsed(value)
})

</script>

<template>
    <ProLayoutComponent ref="layoutRef" v-model:collapsed="innerCollapsed" v-bind="$props">
        <template v-if="slots.logo" #logo>
            <slot name="logo"></slot>
        </template>
        <template v-if="slots.header" #header>
            <slot name="header"></slot>
        </template>
        <template v-if="slots.actions" #actions>
            <slot name="actions"></slot>
        </template>
        <template v-if="slots.aside" #aside>
            <slot name="aside"></slot>
        </template>
        <template v-if="slots.aside" #aside>
            <slot name="aside"></slot>
        </template>
        <template v-if="slots.footer" #footer>
            <slot name="footer"></slot>
        </template>
        <slot />
    </ProLayoutComponent>
</template>

<style></style>