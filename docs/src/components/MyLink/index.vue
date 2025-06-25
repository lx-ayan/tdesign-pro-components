<template>
    <t-link :href="props.href" target="__blank" theme="primary" hover="color" ><slot></slot></t-link>
</template>

<script setup lang="ts">
const props = defineProps<{href: string}>();
</script>