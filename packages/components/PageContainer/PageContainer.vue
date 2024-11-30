<script setup lang='tsx'>
import { computed, useSlots } from 'vue';
import { PageContainerProps, PageContainerEmit, PageContainerBreadcrumb } from './types';
import { PageContainerHeader } from './PageContainerHeader';
import './index.css';

defineOptions({ name: 'PageContainer' });

const props = withDefaults(defineProps<PageContainerProps>(), {
    footer: false,
    bodyBordered: false
});

const emits = defineEmits<PageContainerEmit>();

const slots = useSlots();

function handleTabsChange(v: string) {
    emits('tabChange', v);
}

function handleBreadcrumbClick(v: string, item: PageContainerBreadcrumb) {
    emits('tabChange', v, item);
}

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
                <slot />
            </t-card>
        </div>
    </div>
</template>

<style lang='scss'></style>