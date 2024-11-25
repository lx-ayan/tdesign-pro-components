<script setup lang='tsx'>
import './index.css';
import ProLayoutComponent from './ProLayoutComponent';
defineOptions({
    name: 'ProLayout'
});
const slots = defineSlots();
</script>

<template>
    <ProLayoutComponent v-bind="$props">
        <template v-if="slots.logo" #logo>
            <slot name="logo"></slot>
        </template>
        <template v-if="slots.header" #header>
            <slot name="header"></slot>
        </template>
        <template v-if="slots.actions" #actions>
            <slot name="actions"></slot>
        </template>
        <slot />
    </ProLayoutComponent>
</template>

<style>
</style>