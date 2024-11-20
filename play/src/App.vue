<script setup lang="tsx">
import { onMounted, ref } from 'vue';
import { ProTableOption, ProTableRef } from 'tdesign-pro-component';
import { Input, MessagePlugin, TableProps } from 'tdesign-vue-next';
const inputValue = ref('');
const page = ref({ pageNum: 1, pageSize: 10 });

const proTableRef = ref<ProTableRef>();

const data =ref<any>();

const options: ProTableOption[] = [
  {
    key: 'id',
    title: '编号',
    hideInSearch: true,
    tableColumnsProps: {
      edit: {
        // 1. 支持任意组件。需保证组件包含 `value` 和 `onChange` 两个属性，且 onChange 的第一个参数值为 new value。
        // 2. 如果希望支持校验，组件还需包含 `status` 和 `tips` 属性。具体 API 含义参考 Input 组件
        component: Input,
        // props, 透传全部属性到 Input 组件。可以是一个函数，不同行有不同的 props 属性 时，使用 Function）
        props: {
          clearable: true,
          autofocus: true,
        },
        // 触发校验的时机（when to validate)
        validateTrigger: 'change',
        // 透传给 component: Input 的事件（也可以在 edit.props 中添加）
        on: (editContext) => ({
          onBlur: () => {
            console.log('失去焦点', editContext);
          },
          onEnter: (ctx) => {
            ctx?.e?.preventDefault();
            console.log('onEnter', ctx);
          },
        }),
        // 除了点击非自身元素退出编辑态之外，还有哪些事件退出编辑态
        abortEditOnEvent: ['onEnter'],
        // 编辑完成，退出编辑态后触发
        onEdited: (context) => {
          console.log(context);
          console.log(proTableRef.value)
          proTableRef.value?.setRequestData(context.rowIndex, context.newRowData)
          MessagePlugin.success('Success');
        },
        // 校验规则，此处同 Form 表单。https://tdesign.tencent.com/vue-next/components/form
        rules: [
          { required: true, message: '不能为空' },
          { max: 10, message: '字符数量不能超过 10', type: 'warning' },
        ],
        // 默认是否为编辑状态
        defaultEditable: true,
      },
    }
  },
  {
    key: 'title',
    title: '标题',
    render: (data) => {
      return <div>自定义渲染 {data.row.title}</div>
    }
  },
  {
    key: 'author',
    title: '作者',
    initalValue: '刘续',
  },
  {
    key: 'steps',
    title: '条件',
    type: 'radio',
    data: [{ label: '近地铁', value: '1' }, { label: '设备齐全', value: '2' }],
    hideInTable: true
  },
  {
    key: 'priceRange',
    title: '接受范围',
    type: 'checkbox',
    span: 9,
    data: [{ label: '1000~2000', value: '1' }, { label: '2000~4000', value: '2' }, { label: '4000~6000', value: '3' }, { label: '6000~1W', value: '4' }],
    isSlot: true
  }
];
// 用于控制哪些行或哪些单元格不允许出现编辑态，参数有 { row, col, rowIndex, colIndex }
const editableCellState = (cellParams) => {
  // 第一行不允许编辑
  const { row } = cellParams;
  return row.status !== 2;
};

// 用于提交前校验数据（示例代码有效，勿删）
const validateTableData = () => {
  // 仅校验处于编辑态的单元格
  proTableRef.value?.getTdesignTable().validateTableData().then((result) => {
    console.log('validate result: ', result);
  });
};

const tableProps = {
  editableCellState
}

const selectData = ref<any[]>([]);

function request(data) {
  console.log('request', data);
  return Promise.resolve({
    total: 10,
    list: [{ id: 1, title: '标题', author: 'Tom Hardy' }, { id: 2, title: '标题', author: 'Tom Hardy' }, { id: 3, title: '标题', author: 'Tom Hardy' }, { id: 4, title: '标题', author: 'Tom Hardy' }, { id: 5, title: '标题', author: 'Tom Hardy' }]
  })
}

</script>

<template>
  {{ selectData }}
  <div style="background-color: #333; height: 100vh;">
    <ProTable ref="proTableRef" :tableProps selectAble v-model:selectData="selectData" rowKey="id" v-model:page="page" :request :options>
      <template #pro-table-title>
        高级表格
      </template>
      <template #pro-table-actions>
        <t-button>新增表格</t-button>
      </template>
      <template #table-priceRange="{ row }">
        <div>
          Hello World
        </div>
      </template>
      <template #form-title="{ form }">
        <ProFormText label="标题" name="title" v-model="form.title" />
      </template>
    </ProTable>
  </div>

</template>

<style scoped></style>
