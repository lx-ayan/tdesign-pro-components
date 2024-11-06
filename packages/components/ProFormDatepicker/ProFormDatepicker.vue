<script setup lang='ts'>
import { ref, watch } from 'vue';
import { ProFormDatepickerProps, DatePickerValueType } from './types';

defineOptions({
  name: 'ProFormDatepicker'
});

const props = withDefaults(defineProps<ProFormDatepickerProps>(), {});

const innerValue = ref<DatePickerValueType>(props.range ? [] : '');

const slots = defineSlots();

const emits = defineEmits<{
  (e: 'update:modelValue', value: any): void;
  (e: 'change', value: { label: string, value: any } | Array<{ label: string, value: any }>): void;
}>();

watch(() => props.modelValue, (value) => innerValue.value = value)

watch(innerValue, (value) => {
  emits('update:modelValue', value);
});

</script>

<template>
  <t-form-item :labelWidth="props.labelWidth" :labelAlign="props.labelAlign" :requiredMark="props.requiredMark" :label="props.label" :name="props.name" :rules="props.rules" v-bind="props.formItemProps">
    <t-input-adornment v-if="(slots.prepend || slots.append || props.prepend || props.append) && !props.range" :prepend="props.prepend"
      :append="props.append">
      <template v-if="slots.prepend" #prepend>
        <slot name="prepend" />
      </template>
      <template v-if="slots.append" #append>
        <slot name="append" />
      </template>

      <t-date-picker v-model="innerValue" :disabled="props.disabled"
          :placeholder="props.placeholder" :allow-input="props.allowInput" v-bind="props.datepickerProps"
          :clearable="props.clearable">
          <template v-if="slots.prefixIcon" #prefixIcon>
            <slot name="prefixIcon" />
          </template>

          <template v-if="slots.suffixIcon" #suffixIcon>
            <slot name="suffixIcon" />
          </template>
        </t-date-picker>
    </t-input-adornment>

    <template v-else>
      <t-date-picker v-if="!props.range" v-model="innerValue" :disabled="props.disabled"
        :placeholder="props.placeholder" :allow-input="props.allowInput" v-bind="props.datepickerProps"
        :clearable="props.clearable">
        <template v-if="slots.prefixIcon" #prefixIcon>
          <slot name="prefixIcon" />
        </template>

        <template v-if="slots.suffixIcon" #suffixIcon>
          <slot name="suffixIcon" />
        </template>
      </t-date-picker>

      <t-date-range-picker v-else v-model="innerValue" :disabled="props.disabled" :placeholder="props.placeholder"
        :allow-input="props.allowInput" v-bind="props.datepickerProps" :clearable="props.clearable">
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