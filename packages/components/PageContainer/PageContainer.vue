<script setup lang='tsx'>
import { computed, useSlots } from 'vue';
import { PageContainerProps, PageContainerEmit } from './types';
import { PageContainerHeader } from './PageContainerHeader';
import { getSlots, VueNode, WithFalse } from '@tdesign-pro-component/utils';

defineOptions({ name: 'PageContainer' });

const props = withDefaults(defineProps<PageContainerProps>(), {
    footer: false
});

const emits = defineEmits<PageContainerEmit>();

const slots = useSlots();

const headerDom = computed(() => {
    return PageContainerHeader(props.header)
});

</script>

<template>
    <div>

    </div>
</template>

<style lang='scss'></style>