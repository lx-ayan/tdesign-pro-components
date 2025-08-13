import {ref} from 'vue';

const useResetRef = <T>(initalValue: () => T) => {
   const state = ref<T>(initalValue()); 

   const reset = () => {
      initalValue();
   }

   return [state, reset];
}

export default useResetRef;