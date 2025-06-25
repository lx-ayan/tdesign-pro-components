<script setup lang="tsx">
import BasicTable from './components/BasicTable/index.vue';
import LinkAge from './components/LinkAge/index.vue';
import TodoList from './components/TodoList/index.vue';
import MyRender from './components/MyRender/index.vue';
import ApiTable from '../../components/ApiTable/index.vue';
import CodeContainer from '../../components/CodeContainer/index.vue';
import TypeTable from '../../components/TypeTable/index.vue';
import SlotTable from '../../components/SlotTable/index.vue';
import EventTable from '../../components/EventTable/index.vue';

const dataSource = [
  {
    name: 'rowKey',
    type: <span>String</span>,
    defaultValue: 'id',
    description: '行索引',
    required: 'N'
  },
  {
    name: 'options',
    type: <span>Array <CodeContainer>{`TS: ProTableOption<T>`}</CodeContainer></span>,
    defaultValue: '-',
    description: '表格的配置',
    required: 'Y'
  },
  {
    name: 'request',
    type: <span>Function <CodeContainer>{`TS: <REQ, RES>(data: ProTableRequest<REQ>) => Promise<ProTableResult<RES>>`}</CodeContainer></span>,
    defaultValue: '-',
    description: '初始化的数据，没有 request 时，使用该数据',
    required: 'Y'
  },
  {
    name: 'dragAble',
    type: <span>Boolean</span>,
    defaultValue: '-',
    description: '开启拖拽',
    required: 'N'
  },
  {
    name: 'dragType',
    type: <span>String <CodeContainer>TS: 'row' | 'col' | 'row-handler'</CodeContainer></span>,
    defaultValue: 'row-handler',
    description: '拖拽的类型',
    required: 'N'
  },
  {
    name: 'dragHandler',
    type: <span>Function <CodeContainer>{`TS: (data) => Array<any>`}</CodeContainer></span>,
    defaultValue: '-',
    description: '自定义拖拽函数，当需要自定义化拖拽时可以使用，必须返回拽后的数据，组件默认的基本够用',
    required: 'N'
  },
  {
    name: 'empty',
    type: <span>String <CodeContainer>TS: VueNode</CodeContainer></span>,
    defaultValue: '-',
    description: '表格没有数据时，自定义空状态',
    required: 'N'
  },
  {
    name: 'selectData',
    type: 'Array',
    defaultValue: '-',
    description: '表格开启选择时，选择的数据支持 v-model',
    required: 'N'
  },
  {
    name: 'selectAble',
    type: 'Boolean',
    defaultValue: '-',
    description: '是否开启表格可选',
    required: 'N'
  },
  {
    name: 'selectType',
    type: <span>String, <CodeContainer>TS: 'single' | 'multiple'</CodeContainer></span>,
    defaultValue: 'multiple',
    description: '选择模式,多选或单选',
    required: 'N'
  },
  {
    name: 'editAble',
    type: 'Boolean',
    defaultValue: '-',
    description: '是否开启编辑表格',
    required: 'N'
  },
  {
    name: 'hideFooter',
    type: 'Boolean',
    defaultValue: '-',
    description: '隐藏分页',
    required: 'N'
  },
  {
    name: 'dataActions',
    type: <span>String, Object, Function <CodeContainer>TS: VueNode</CodeContainer></span>,
    defaultValue: '-',
    description: '表格嵌入的数据区域',
    required: 'N'
  },
  {
    name: 'expanedRow',
    type: <span>String, Object, Function <CodeContainer>TS: VueNode</CodeContainer></span>,
    defaultValue: '-',
    description: '展开表格的内容区域',
    required: 'N'
  },
  {
    name: 'formHeader',
    type: <span>String, Object, Function <CodeContainer>TS: VueNode</CodeContainer></span>,
    defaultValue: '-',
    description: '表头区域',
    required: 'N'
  },
  {
    name: 'hideForm',
    type: <span>Boolean</span>,
    defaultValue: '-',
    description: '隐藏表格',
    required: 'N'
  },
  {
    name: 'dataActionsAlign',
    type: <span>String <CodeContainer>TS: 'left' | 'right'</CodeContainer></span>,
    defaultValue: '-',
    description: <span>表格嵌入的数据区域排版布局，可选 left、right</span>,
    required: 'N'
  }
];

const typeData = [
  {
    name: 'key',
    description: '列的唯一标识',
    type: <span>String</span>
  },
  {
    name: 'title',
    description: '列标题',
    type: <span>String | ProTableTitle</span>
  },
  {
    name: 'render',
    description: '自定义渲染函数，用于渲染表格单元格内容',
    type: <span>Function <CodeContainer>{`TS: (row: T, rowIndex?: number) => VueNode`}</CodeContainer></span>
  },
  {
    name: 'hideInTable',
    description: '是否在表格中隐藏此列',
    type: <span>Boolean</span>
  },
  {
    name: 'titleRender',
    description: '自定义渲染函数，用于渲染列标题',
    type: <span>Function <CodeContainer>{`TS: (...args: any[]) => VueNode`}</CodeContainer></span>
  },
  {
    name: 'tableColumnsProps',
    description: '表格列的额外属性',
    type: <span>Object <CodeContainer>{`TS: Optional<BaseTableCol, 'colKey'>`}</CodeContainer></span>
  },
  {
    name: 'ellipsis',
    description: '是否省略超长文本',
    type: <span>Boolean</span>
  },
  {
    name: 'ellipsisTitle',
    description: '省略文本时是否显示完整内容的tooltip',
    type: <span>Boolean</span>
  },
  {
    name: 'fixed',
    description: '列是否固定',
    type: <span>String <CodeContainer>{`TS: 'left' | 'right'`}</CodeContainer></span>
  },
  {
    name: 'sorter',
    description: '是否支持排序',
    type: <span>Boolean</span>
  },
  {
    name: 'width',
    description: '列宽度',
    type: <span>String | Number</span>
  },
  {
    name: 'footer',
    description: '表格底部内容渲染函数',
    type: <span>Function <CodeContainer>{`TS: (...args: any[]) => VueNode`}</CodeContainer></span>
  },
  {
    name: 'tableType',
    description: '表格类型',
    type: <span>String <CodeContainer>{`TS: WithFalse<'single' | 'multiple'>`}</CodeContainer></span>
  },
  {
    name: 'edit',
    description: '单元格编辑配置',
    type: <span>Object <CodeContainer>{`TS: TableEditableCellConfig & {beforeEdit?: () => Promise<any>; onEditSuccess?: (data?: PrimaryTableOnEditedContext<T>) => void, onEditFail?: (e: any) => void}`}</CodeContainer></span>
  },
  {
    name: 'hideInSearch',
    description: '是否在搜索表单中隐藏此列',
    type: <span>Boolean</span>
  },
  {
    name: 'placeholder',
    description: '表单控件的占位文本',
    type: <span>String</span>
  },
  {
    name: 'type',
    description: '表单控件类型',
    type: <span>String <CodeContainer>{`TS: 'text' | 'number' | 'textarea' | 'select' | 'radio' | 'checkbox' | 'date' | 'date-range'`}</CodeContainer></span>
  },
  {
    name: 'span',
    description: '表单控件占据的栅格宽度',
    type: <span>Number</span>
  },
  {
    name: 'data',
    description: '表单控件的数据源',
    type: <span>Array | Function <CodeContainer>{`TS: any[] | PromiseFunction<any[]>`}</CodeContainer></span>
  },
  {
    name: 'labelAlign',
    description: '标签对齐方式',
    type: <span>String <CodeContainer>{`TS: 'left' | 'right' | 'top'`}</CodeContainer></span>
  },
  {
    name: 'disabled',
    description: '是否禁用表单控件',
    type: <span>Boolean</span>
  },
  {
    name: 'rules',
    description: '表单验证规则',
    type: <span>Array <CodeContainer>{`TS: FormRule[]`}</CodeContainer></span>
  },
  {
    name: 'checkboxProps',
    description: '复选框组件的额外属性',
    type: <span>Object <CodeContainer>{`TS: Optional<ProFormCheckboxProps, FilterKey>`}</CodeContainer></span>
  },
  {
    name: 'radioProps',
    description: '单选框组件的额外属性',
    type: <span>Object <CodeContainer>{`TS: Optional<ProFormRadioProps, FilterKey>`}</CodeContainer></span>
  },
  {
    name: 'textProps',
    description: '文本框组件的额外属性',
    type: <span>Object <CodeContainer>{`TS: Optional<ProFormTextProps, FilterKey>`}</CodeContainer></span>
  },
  {
    name: 'numberProps',
    description: '数字输入框组件的额外属性',
    type: <span>Object <CodeContainer>{`TS: Optional<ProFormInputNumberProps, FilterKey>`}</CodeContainer></span>
  },
  {
    name: 'textareaProps',
    description: '文本域组件的额外属性',
    type: <span>Object <CodeContainer>{`TS: Optional<ProFormTextareaProps, FilterKey>`}</CodeContainer></span>
  },
  {
    name: 'selectProps',
    description: '下拉选择器组件的额外属性',
    type: <span>Object <CodeContainer>{`TS: Optional<ProFormSelectProps, FilterKey>`}</CodeContainer></span>
  },
  {
    name: 'datePickerProps',
    description: '日期选择器组件的额外属性',
    type: <span>Object <CodeContainer>{`TS: Optional<ProFormDatePickerProps, FilterKey>`}</CodeContainer></span>
  },
  {
    name: 'readonly',
    description: '是否为只读状态',
    type: <span>Boolean</span>
  }
];

const slotData = [
  {
    name: <span><CodeContainer>{'{table.key}'}</CodeContainer></span>,
    description: '每一项配置的插槽，参数：当前数据 {row}'
  },
  {
    name: <span>formHeader</span>,
    description: '表头区域'
  },
  {
    name: <span>dataActions</span>,
    description: '表格内嵌内容区域'
  },
  {
    name: <span>expandedRow</span>,
    description: '表格折叠内容区域'
  },
  {
    name: <span>footerActions</span>,
    description: '表格底部区域'
  },
  {
    name: <span>title</span>,
    description: '表格标题区域'
  },
  {
    name: <span>actions</span>,
    description: '表格操作区域'
  }
];

const eventData = [
  {
    name: <span>getTableData</span>,
    description: <span>获取表格的响应式数据，这个函数拿到组件实例的数据，所以要谨慎操作，<CodeContainer>{`TS: () => any[]`}</CodeContainer></span>
  },
  {
    name: <span>reload</span>,
    description: <span>表格重新加载，将表格表单内容清空后，返回至第一页重新加载<CodeContainer>{`TS: () => void`}</CodeContainer></span>
  },
  {
    name: <span>reset</span>,
    description: <span>表格重置，将表格内容清空后重新加载，该操作不会返回第一页重新加载<CodeContainer>{`TS: () => void`}</CodeContainer></span>
  },
  {
    name: <span>getFormValue</span>,
    description: <span>获取搜索内容的数据, <CodeContainer>{`TS: () => any`}</CodeContainer></span>
  }
];

const requestData = [
  {
    name: 'pageNum',
    description: '页码',
    type: <span>Number</span>
  },
  {
    name: 'form',
    description: '表格数据',
    type: <span>Object</span>
  },
  {
    name: 'pageSize',
    description: '每页条数',
    type: <span>Number</span>
  }
];

const responseData = [
{
    name: 'total',
    description: '总条数',
    type: <span>Number</span>
  },
  {
    name: 'list',
    description: '数据',
    type: <span>Array</span>
  },
  {
    name: 'success',
    description: '状态',
    type: <span>boolean</span>
  }
]
</script>

<template>
  <div style="padding: 0 20px; padding-bottom: 80px;">
    <t-typography-title>ProTable 表格</t-typography-title>
    <t-typography-paragraph>
      <t-typography-text code>
        ProTable
      </t-typography-text>，是本套组件中核心组件之一，业务使用最多的组件。它将表单和表格组合，可以快速构建出一个表单+表格的页面，此外 <t-typography-text code>
        ProTable
      </t-typography-text>, 在请求上不需要您的处理，它会自动的帮你帮请求处理完成，您只需要提供一个请求函数即可使用。大大减少了您在开发过程中的代码量。
    </t-typography-paragraph>

    <BasicTable />
    <LinkAge />
    <TodoList />
    <MyRender />
    <ApiTable :data="dataSource" />
    <TypeTable :data="typeData" id="ProTableOption" title="ProTableOption" />
    <SlotTable :data="slotData" />
    <EventTable :data="eventData" />
    <TypeTable :data="requestData" id="ProTableRequest" title="ProTableRequest" />
    <TypeTable :data="responseData" id="ProTableResult" title="ProTableResult" />

    <div style="position: fixed; top: 320px; right: 20px;">
      <t-anchor>
        <t-anchor-item href="#ProTableBasic" title="基本使用" />
        <t-anchor-item href="#ProTableLinkAge" title="嵌套内容" />
        <t-anchor-item href="#TodoListTable" title="可编辑表格" />
        <t-anchor-item href="#ProTableMyRender" title="自定义渲染" />
        <t-anchor-item href="#api" title="API" />
        <t-anchor-item href="#ProTableOption" title="ProTableOption" />
        <t-anchor-item href="#slots" title="slots" />
        <t-anchor-item href="#event" title="event" />
      </t-anchor>
    </div>

  </div>
</template>


<style></style>