import { ref, watch } from "vue";

export function useVModel<T = object>(props: T, key: keyof T, emits: any, defaultValue?: any) {
    const emitsName = `update:${key as unknown as string}`;
    const innerModel = ref(defaultValue || props[key]);
    watch(() => props[key], (value) => {
        innerModel.value = value;
    }, { deep: true });

    watch(innerModel, value => {
        emits(emitsName, value);
    })

    return innerModel;
}

