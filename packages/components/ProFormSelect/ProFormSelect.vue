<script lang="ts" setup>
import {ProFormSelectProps} from "./types";

const props = withDefaults(defineProps<ProFormSelectProps>(), {
  placeholder: `请选择数据`
});

</script>

<template>
<el-form-item :label="props.label" :name="props.name">
  <el-select :placeholder="`请选择${props.label || '数据'}`">

  </el-select>
</el-form-item>
</template>