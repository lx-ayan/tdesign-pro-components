import { ref, watch, WatchOptions } from "vue"

const useWatch = <T>(value: T, cb?: (newValue: T, oldValue: T) => void, options?: WatchOptions<false>) => {
    const state = ref(value);

    watch(state, (newValue, oldValue) => {
        if (cb) {
            cb(newValue, oldValue);
        }
    }, { ...options })
}

export default useWatch;