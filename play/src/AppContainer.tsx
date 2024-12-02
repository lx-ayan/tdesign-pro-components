import { PageContainer } from 'tdesign-pro-component';
import { Button, Icon } from 'tdesign-vue-next';
import { defineComponent, ref } from 'vue';

const AppContainer = defineComponent({
    setup() {

        const header = {
            title: '我的 Title',
            extra: () => <Button>Hello</Button>,
            actions: () => <Button>主要操作</Button>,
            breadcrumb: {
                items: [
                    { title: '首页', path: '/', icon: <Icon name="home"></Icon> },
                    { title: '系统管理', path: '/sys' },
                    { title: '日志处理', path: '/sys/log' }
                ]
            }
        }

        const tabList = ref([
            { value: '1', label: '栏目一' },
            { value: '2', label: () => <div>'栏目二'</div> }
        ]);

        const loading = ref({
            status: true,
            text: '加载中。。。。'
        })

        setTimeout(() => {
            loading.value.status = false
        }, 3000);

        return () => <PageContainer loading={loading.value} footer={() => <span>Footer</span>} content={() => <div>Hello</div>} tabList={tabList.value} header={header}>

        </PageContainer>
    }
});

export default AppContainer;