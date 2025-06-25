import { Button, Card, Icon,Space } from "tdesign-vue-next";
import { computed, defineComponent, ref } from "vue";
import { ProForm, ProFormOption, ProFormProps, ProFormRef } from "../../ProForm";
import { getSlotOrJSX, VueNode } from "@tdesign-pro-component/utils";

interface ProTableHeaderProps<T = any> {
    formProps?: ProFormProps<T>;
    options?: ProFormOption<T>[];
    showNum?: number;
    onSearch?: (data: T) => void;
    onReset?: () => void;
    formHeader?: VueNode;
    loading?: boolean;
}

//@ts-ignore
const ProTableHeader = defineComponent(
    //@ts-ignore
    <T extends Record<string, any> | object>(props: ProTableHeaderProps<T>, { emit, slots, expose }) => {

        const proFormRef = ref<ProFormRef>();

        const formHeaderRender = getSlotOrJSX<typeof props>('formHeader', slots, props)

        const visibleOptions = computed(() =>
            props.options?.filter(item => !item.hidden) || []
        );

        const showCountWhenCollapsed = props.showNum;

        let formData: any = {}

        const expandState = ref(false);

        const displayedOptions = computed(() => {
            if (expandState.value) return visibleOptions.value;
            return visibleOptions.value.slice(0, showCountWhenCollapsed! as unknown as number);
        });

        const hasMoreOptions = computed(() =>
            visibleOptions.value.length > showCountWhenCollapsed! as unknown as number
        );

        const toggleExpand = () => {
            expandState.value = !expandState.value;
            if (expandState.value) {
                proFormRef.value?.resetRequest()
            }
        };

        async function handleSubmit(data: T) {
            emit('search', data)
            return true;
        }

        function handleChange(key: string, value: any) {
            formData[key] = value;
        }

        async function request() {
            return formData
        }

        function handleResetClick() {
            formData = {}
            proFormRef.value?.reset()
            props.onReset && props.onReset();
        }

        expose({
            getSearchValue: () => proFormRef.value?.getFormValue(),
            reset: handleResetClick,
            resetForm: () => proFormRef.value?.reset()
        })

        return () => (
            <Card>
                {
                    formHeaderRender() && formHeaderRender()
                }

                <ProForm<T>
                    ref={proFormRef}
                    request={request}
                    onSubmit={handleSubmit}
                    gap={16}
                    filterEmptyStr={true}
                    filterEmptyArray={true}
                    // footerStyle={}
                    options={displayedOptions.value}
                    hideFooter={true}
                    onChange={handleChange}
                    footer={() => (
                        <div style={`display: flex; justify-content: flex-end; width: 100%;`}>
                            <Space>
                                <Button onClick={handleResetClick} theme="default" variant="outline">重置</Button>
                                <Button loading={props.loading} type="submit">查询</Button>
                                {hasMoreOptions.value && (
                                    <Button variant="text" onClick={toggleExpand}>
                                        <div style="display: flex; align-items: center;">
                                            {expandState.value ? '收起' : '展开'}
                                            <Icon
                                                name={expandState.value ? 'chevron-up' : 'chevron-down'}
                                            />
                                        </div>
                                    </Button>
                                )}
                            </Space>
                        </div>
                    )}
                />
            </Card>
        );
    },
    {
        name: 'ProTableHeader',
        emit: ['search'],
        props: {
            formProps: Object,
            options: Array,
            cardProps: Object,
            showNum: {
                type: Number,
                default: 3
            },
            formHeader: [String, Object, Function],
            loading: Boolean,
            onReset: Function
        }
    }
);

export default ProTableHeader;