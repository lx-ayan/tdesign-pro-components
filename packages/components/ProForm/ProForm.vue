<script lang="ts" setup>
import { computed, nextTick, onMounted, ref, useTemplateRef } from 'vue';
import ProFormCheckbox from '../ProFormCheckbox/ProFormCheckbox.vue';
import ProFormDatePicker from '../ProFormDatePicker/ProFormDatePicker.vue';
import ProFormDateRangePicker from '../ProFormDateRangePicker/ProFormDateRangePicker.vue';
import ProFormInputNumber from '../ProFormInputNumber/ProFormInputNumber.vue';
import ProFormRadio from '../ProFormRadio/ProFormRadio.vue';
import ProFormSelect from '../ProFormSelect/ProFormSelect.vue';
import ProFormText from '../ProFormText/ProFormText.vue';
import ProFormTextarea from '../ProFormTextarea/ProFormTextarea.vue';
import ProFormTreeSelect from '../ProFormTreeSelect/ProFormTreeSelect.vue';
import { ExtractNames, ProFormOption, ProFormProps } from './types';
import { FormInstanceFunctions } from 'tdesign-vue-next';

const formRef = useTemplateRef<FormInstanceFunctions>('formRef');

const COMPONENT_MAP = {
    'text': ProFormText,
    'select': ProFormSelect,
    'date': ProFormDatePicker,
    'dateRange': ProFormDateRangePicker,
    'radio': ProFormRadio,
    'checkbox': ProFormCheckbox,
    'treeSelect': ProFormTreeSelect,
    'inputNumber': ProFormInputNumber,
    'textarea': ProFormTextarea
} as const;

defineOptions({
    name: 'ProForm'
});

const ROOT_PROPS = ['name', 'label', 'type', 'hidden', 'colProps', 'data', 'rules'];

const props = defineProps<ProFormProps>();

const loading = ref(false);

const innerOptions = computed(() => {
    let preName = '';
    const options: ProFormOption[] = [];
    props.options.forEach((item, index) => {
        if (preName === item.name) {
            options[index - 1] = item;
        } else {
            options.push(item);
        }
        preName = item.name;
    })
    return options.filter(item => item.hidden !== true);
});

const modelValue = defineModel<Record<string, any>>({
    default: () => ({})
});

const getNestedValue = (obj: Record<string, any>, path: string) => {
    return path.split('.').reduce((current, part) => {
        return current && typeof current === 'object' ? current[part] : undefined;
    }, obj);
};

const setNestedValue = (obj: Record<string, any>, path: string, value: any) => {
    const parts = path.split('.');
    const lastPart = parts.pop();

    if (!lastPart) return;

    let current = obj;
    parts.forEach(part => {
        if (!current[part] || typeof current[part] !== 'object') {
            current[part] = {};
        }
        current = current[part];
    });

    current[lastPart] = value;
    modelValue.value = { ...modelValue.value };
};

function buildNestedObject(items: ProFormOption[]): Record<string, any> {
    const result: Record<string, any> = {};

    items.forEach(item => {
        if (!item.name) return;

        const pathParts = item.name.split('.');
        let currentLevel: Record<string, any> = result;

        pathParts.forEach((part, index) => {
            const isLastPart = index === pathParts.length - 1;

            if (isLastPart) {
                // 如果有默认值则使用默认值，否则为空字符串
                currentLevel[part] = item.defaultValue ?? '';
            } else {
                if (!currentLevel[part] || typeof currentLevel[part] !== 'object') {
                    currentLevel[part] = {};
                }
                currentLevel = currentLevel[part];
            }
        });
    });

    return result;
}

onMounted(() => {
    if (Object.keys(modelValue.value).length === 0) {
        modelValue.value = buildNestedObject(innerOptions.value);
    }
    nextTick(async () => {
        if (props.request) {
            const result = await props.request();
            modelValue.value = result;
        }
    });
});

function getProps(option: ProFormOption) {
    if (option.props) return option.props;

    return Object.entries(option).reduce((props, [key, value]) => {
        if (!ROOT_PROPS.includes(key)) {
            return typeof value === 'object' && value !== null
                ? { ...props, ...value }
                : { ...props, [key]: value };
        }
        return props;
    }, {} as Record<string, any>);
}

function getComponent(option: ProFormOption) {
    if (!option.type) {
        return COMPONENT_MAP['text'];
    }
    if (typeof option.type !== 'string') {
        return option.type;
    }
    return COMPONENT_MAP[option.type as keyof typeof COMPONENT_MAP] ? COMPONENT_MAP[option.type] : COMPONENT_MAP['text'];
}
type FormOptionNames = ExtractNames<typeof innerOptions.value>;

defineExpose({
    setItem: <K extends FormOptionNames>(key: K, value: any) => {
        setNestedValue(modelValue.value, key, value);
    },
    reset: formRef.value?.reset,
    validate: formRef.value?.validate,
    clearValidate: formRef.value?.clearValidate,
    submit: formRef.value?.submit
});

async function handleSubmit() {
    if (props.submit) {
        loading.value = true;
        try {
            await props.submit(modelValue.value);
        } finally {
            loading.value = false;
        }
    }
}
</script>

<template>
    <t-form @submit="handleSubmit" v-bind="{ ...$attrs, ...props.formProps }" ref="formRef" :data="modelValue">
        <t-row v-bind="{ ...props.rowProps, gutter: props?.rowProps?.gutter || [12, 24] }">
            <t-col v-for="item in innerOptions" :key="item.name" v-bind="item.colProps">
                <slot :name="item.name" :option="item">
                    <component :model-value="getNestedValue(modelValue, item.name)"
                        @update:model-value="(value: any) => setNestedValue(modelValue, item.name, value)"
                        :data="item.data" :label="item.label" :rules="item.rules" :name="item.name"
                        :is="getComponent(item)" v-bind="getProps(item)"></component>
                </slot>
            </t-col>
            <slot name="actions">
                <t-col :span="12">
                    <t-space style="float: right;">
                        <t-button :loading="loading" theme="default" type="reset">重置</t-button>
                        <t-button :loading="loading" type="submit">提交</t-button>
                    </t-space>
                </t-col>
            </slot>
        </t-row>
    </t-form>
</template>