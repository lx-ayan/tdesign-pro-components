<script setup lang='tsx'>
import { onMounted, ref, useTemplateRef } from 'vue';
import ProFormText from '../../packages/components/ProFormText/ProFormText.vue';
import { ProFormTextRef } from '../../packages/components';
import ProFormSelect from '../../packages/components/ProFormSelect/ProFormSelect.vue';
import ProFormRadio from '../../packages/components/ProFormRadio/ProFormRadio.vue';
import ProFormCheckbox from '../../packages/components/ProFormCheckbox/ProFormCheckbox.vue';
import ProFormDatePicker from '../../packages/components/ProFormDatePicker/ProFormDatePicker.vue';
import ProFormDateRangePicker from '../../packages/components/ProFormDateRangePicker/ProFormDateRangePicker.vue';
import ProFormInputNumber from '../../packages/components/ProFormInputNumber/ProFormInputNumber.vue';
import ProFormTreeSelect from '../../packages/components/ProFormTreeSelect/ProFormTreeSelect.vue';
const formData = ref({
  name: '',
  options: '',
  radio: '',
  checkbox: [],
  datePicker: '',
  datePickerRange: [],
  number: 0,
  tree: ''
});

const inputRef = useTemplateRef<ProFormTextRef>('inputRef');

function data() {
  return Promise.resolve([{ label: '选项1', value: '1', children: [{label: '1-1', value: '1-1'}] }, { label: '选项2', value: '2' }, { label: '选项3', value: '3' }, { label: '选项4', value: '4' }])
}

onMounted(() => {
})

setTimeout(() => {
}, 3000)
</script>
<template>
  <div>
    {{ formData }}
    <t-form>
      <ProFormText ref="inputRef" label-width="0px" placeholder="请输入 username" label-align="left" name="username"
        v-model="formData.name">
      </ProFormText>

      <ProFormSelect label-width="0px" v-model="formData.options" :data="data" name="options">
      </ProFormSelect>

      <ProFormRadio label-width="0px" v-model="formData.radio" name="raido" :data="data">

      </ProFormRadio>

      <ProFormCheckbox label-width="0px" v-model="formData.checkbox" name="checkbox" :data="data">

      </ProFormCheckbox>

      <ProFormDatePicker label-width="0px" v-model="formData.datePicker" name="datepicker">

      </ProFormDatePicker>

      <ProFormDateRangePicker label-width="0px" v-model="formData.datePickerRange" name="datepickerrange">
      </ProFormDateRangePicker>

      <ProFormInputNumber v-model="formData.number" name="number" />

      <ProFormTreeSelect :data="data" v-model="formData.tree" name="tree"></ProFormTreeSelect>
    </t-form>
  </div>
</template>