import { computed } from "vue";

const useSlotKey = (slots: Object) => {
    if(typeof slots !== 'object') {
        return slots;
    }
    return computed(() => Object.keys(slots));
}

export default useSlotKey;