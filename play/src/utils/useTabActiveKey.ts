import { ref } from 'vue';
import { PageContainerProps } from 'tdesign-pro-component';
const useTabActiveKey = (defaultValue: string) => {
    const innerValue = ref(defaultValue);

    function handleTabChange(value: string) {
        innerValue.value = value;
    }

    return {
        tabActiveKey: innerValue,
        tabChange: handleTabChange
    }
}

export const tabList: PageContainerProps['tabList'] = [
    {
        label: '示例',
        value: '1'
    },
    {
        label: 'API',
        value: '2'
    }
]

export default useTabActiveKey;