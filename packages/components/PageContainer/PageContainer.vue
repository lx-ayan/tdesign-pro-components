<script setup lang='tsx'>
import { computed, useSlots } from 'vue';
import { PageContainerProps, PageContainerEmit, PageContainerBreadcrumb } from './types';
import { PageContainerHeader } from './PageContainerHeader';
import './index.css';
import { isFunction } from '@tdesign-pro-component/utils';

defineOptions({ name: 'PageContainer' });

const props = withDefaults(defineProps<PageContainerProps>(), {
    footer: false,
    bodyBordered: false,
    loading: {
        status: false
    }
});

const emits = defineEmits<PageContainerEmit>();

const slots = useSlots();

function handleTabsChange(v: string) {
    emits('tabChange', v);
}

function handleBreadcrumbClick(v: string, item: PageContainerBreadcrumb) {
    emits('breadcrumbClick', v, item);
}

const Content = () => isFunction(props.content) ? (props.content as Function)() : props.content;

const Footer = () => isFunction(props.footer) ? (props.footer as Function)() : props.footer;


</script>

<template>
    <div class="page-container">
        <div class="page-container-header">
            <PageContainerHeader @breadcrumbClick="handleBreadcrumbClick" v-bind="props.header">
                <template v-if="slots.actions" #actions>
                    <slot name="actions"></slot>
                </template>
            </PageContainerHeader>
            <div class="page-container-header-tablist" v-if="props.tabList && props.tabList.length">
                <t-tabs @change="handleTabsChange" :default-value="props.tabActiveKey"
                    :action="props.tabBarExtraContent" v-bind="props.tabsProps">
                    <t-tab-panel v-for="tab in props.tabList" :value="tab.value" :label="tab.label"></t-tab-panel>
                </t-tabs>
            </div>
        </div>

        <div class="page-container-body">
            <t-card :bordered="props.bodyBordered">
                <t-loading :loading="props.loading.status" :text="props.loading?.text" v-bind="props.loading">
                    <slot v-if="slots.default" />

                    <Content v-else />
                </t-loading>

            </t-card>
        </div>

        <div v-if="slots.footer || props.footer" class="page-container-footer">
            <t-card :bordered="false">
                <slot v-if="slots.footer" name="footer" />

                <Footer v-else />
            </t-card>
        </div>
    </div>
</template>

<style lang='scss'></style>