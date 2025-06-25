import { ref, watch, watchEffect } from "vue";

export function useVModel<T = object>(props: T, key: keyof T, emits: any, defaultValue?: any) {
    const emitsName = `update:${key as unknown as string}`;

    const innerModel = ref(defaultValue || props[key]);
    watchEffect(() => {
        innerModel.value = props[key];
    });

    watch(innerModel, value => {
        emits(emitsName, value);
    })

    return innerModel;
}