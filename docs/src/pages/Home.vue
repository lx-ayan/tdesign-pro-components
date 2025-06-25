<script setup lang="ts">
import MarkdownContent from './home.md?raw';
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
</script>

<template>
    <div style="padding: 24px;">
        <t-card>
            <MdPreview v-model="MarkdownContent" />
        </t-card>
    </div>

</template>


<style></style>