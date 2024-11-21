<script setup lang='ts'>
import { onMounted, ref } from 'vue';
import { ProFormDatepickerProps, DatePickerValueType } from './types';
import { warn } from '@tdesign-pro-component/utils';
import { DatePickerTriggerSource } from 'tdesign-vue-next';
import { useVModel } from '@tdesign-pro-component/hooks';

defineOptions({
  name: 'ProFormDatepicker'
});

const emits = defineEmits<{
  (e: 'update:modelValue', value: any): void;
  (e: 'change', value: DatePickerValueType, context: { dayjsValue?: any, trigger?: DatePickerTriggerSource }): void;
  (e: 'pick', value: DatePickerValueType): void;
  (e: 'confirm', context: { date: Date, e: MouseEvent }): void;
  (e: 'focus', context: { value: DatePickerValueType; e: FocusEvent }): void;
  (e: 'blur', context: { value: DatePickerValueType; e: FocusEvent }): void;
}>();

const props = withDefaults(defineProps<ProFormDatepickerProps>(), {
  labelAlign: 'left'
});

const innerValue = useVModel(props, 'modelValue', emits, props.modelValue ?props.modelValue: props.range ? [] : '');

const datePickerRef = ref<any>();

const slots = defineSlots();

onMounted(() => {
  if (!props.name) {
    warn('name is empty');
  }
});

function handleChange(value: DatePickerValueType, context: { dayjsValue?: any, trigger?: DatePickerTriggerSource }) {
  emits('change', value, context);
}

function handlePick(value: DatePickerValueType) {
  emits('pick', value);
}

function handleFocus(context: { value: DatePickerValueType; e: FocusEvent }) {
  emits('focus', context);
}

function handleBlur(context: { value: DatePickerValueType; e: FocusEvent }) {
  emits('blur', context);
}

function handleConfirm(context: { date: Date, e: MouseEvent }) {
  emits('confirm', context);
}

defineExpose({
  getValue: () => innerValue.value
});

</script>

<template>
  <t-form-item :labelWidth="props.labelWidth" :labelAlign="props.labelAlign" :label="props.label" :name="props.name"
    :rules="props.rules" v-bind="props.formItemProps">
    <t-input-adornment :style="props.style" :format="props.format" ref="datePickerRef" @change="handleChange" @pick="handlePick"
      @blur="handleBlur" @focus="handleFocus" @confirm="handleConfirm"
      v-if="(slots.prepend || slots.append || props.prepend || props.append) && !props.range" :prepend="props.prepend"
      :append="props.append">
      <template v-if="slots.prepend" #prepend>
        <slot name="prepend" />
      </template>
      <template v-if="slots.append" #append>
        <slot name="append" />
      </template>

      <t-date-picker :style="props.style" :format="props.format" :size="props.size" ref="datePickerRef" @change="handleChange"
        @pick="handlePick" @blur="handleBlur" @focus="handleFocus" @confirm="handleConfirm" v-model="innerValue"
        :disabled="props.disabled" :placeholder="props.placeholder" :allow-input="props.allowInput"
        v-bind="props.datepickerProps" :clearable="props.clearable">
        <template v-if="slots.prefixIcon" #prefixIcon>
          <slot name="prefixIcon" />
        </template>

        <template v-if="slots.suffixIcon" #suffixIcon>
          <slot name="suffixIcon" />
        </template>
      </t-date-picker>
    </t-input-adornment>

    <template v-else>
      <t-date-picker :style="props.style" :format="props.format" :size="props.size" ref="datePickerRef" @change="handleChange"
        @pick="handlePick" @blur="handleBlur" @focus="handleFocus" @confirm="handleConfirm" v-if="!props.range"
        v-model="innerValue" :disabled="props.disabled" :placeholder="props.placeholder" :allow-input="props.allowInput"
        v-bind="props.datepickerProps" :clearable="props.clearable">
        <template v-if="slots.prefixIcon" #prefixIcon>
          <slot name="prefixIcon" />
        </template>

        <template v-if="slots.suffixIcon" #suffixIcon>
          <slot name="suffixIcon" />
        </template>
      </t-date-picker>

      <t-date-range-picker :style="props.style" :format="props.format" :size="props.size" ref="datePickerRef" @change="handleChange"
        @pick="handlePick" @blur="handleBlur" @focus="handleFocus" @confirm="handleConfirm" v-else v-model="innerValue"
        :disabled="props.disabled" :placeholder="props.placeholder" :allow-input="props.allowInput"
        v-bind="props.datepickerProps" :clearable="props.clearable">
        <template v-if="slots.prefixIcon" #prefixIcon>
          <slot name="prefixIcon" />
        </template>

        <template v-if="slots.suffixIcon" #suffixIcon>
          <slot name="suffixIcon" />
        </template>
      </t-date-range-picker>
    </template>

  </t-form-item>
</template>

<style lang='scss'></style>