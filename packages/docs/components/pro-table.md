# ProTable 表格组件
<script setup lang="ts">
    import BasicProTable from '../demo/ProTable/BasicProTable.vue';
    import MyRenderOne from '../demo/ProTable/MyRenderOne.vue';
    import MyRenderTwo from '../demo/ProTable/MyRenderTwo.vue';
</script>

ProTable 的诞生是为了解决项目中需要写很多 table 的样板代码的问题，所以在其中封装了很多常用的逻辑。这些封装可以简单的分类为预设行为与预设逻辑。

## 案例
### 基本使用


<div style="margin-top: 24px">
    <BasicProTable />
</div>
<details>
  <summary>
    点击查看代码
  </summary>

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { ProTableOption, ProTableRequest } from 'tdesign-pro-component';
const page = ref({ pageNum: 1, pageSize: 10 });

const options: ProTableOption[] = [
    {
        key: 'id',
        title: '编号',
        hideInSearch: true,
    },
    {
        key: 'title',
        title: '标题',

    },
    {
        key: 'author',
        title: '作者'
    }
];

function request(data: ProTableRequest<any>) {
    console.log('request', data);
    return Promise.resolve({
        total: 10,
        list: [{ id: 1, title: '标题1', author: 'Tom Hardy' }, { id: 2, title: '标题2', author: 'Tom Hardy' }, { id: 3, title: '标题3', author: 'Tom Hardy' }, { id: 4, title: '标题4', author: 'Tom Hardy' }, { id: 5, title: '标题', author: 'Tom Hardy' }]
    })
}

</script>

<template>
    <div>
        <div style="width: 75vw;">
            <ProTable rowKey="id" v-model:page="page" :request :options>
            </ProTable>
        </div>
    </div>
</template>

<style scoped></style>

```
</details>

### 自定义渲染列数据

#### 方式一：插槽形式

在想要自定义的配置项中配置 `isSlot: true`, 然后再 ProTable 添加插槽，插槽名称为 `#table-配置项的 key`。这是一个作用域插槽，里面可以结构 `row` 对象，这个 row 就是你想要的数据

<div style="margin-top: 24px">
    <MyRenderOne />
</div>

<details>
  <summary>点击查看代码</summary>

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { ProTableOption, ProTableRequest } from 'tdesign-pro-component';
const page = ref({ pageNum: 1, pageSize: 10 });

const options: ProTableOption[] = [
    {
        key: 'id',
        title: '编号',
        hideInSearch: true,
    },
    {
        key: 'title',
        title: '标题',

    },
    {
        key: 'image',
        title: '图片',
        isSlot: true
    }
];

function request(data: ProTableRequest<any>) {
    console.log('request', data);
    return Promise.resolve({
        total: 10,
        list: [
            { id: 1, title: '标题1', image: 'https://plus.unsplash.com/premium_photo-1661715304145-e686bb947289?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }, 
            { id: 2, title: '标题2', image: 'https://images.unsplash.com/photo-1516279232585-44b3f7e8bad4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }, 
            { id: 3, title: '标题3', image: 'https://images.unsplash.com/photo-1477847616630-cf9cf8815fda?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }, 
            { id: 4, title: '标题4', image: 'https://images.unsplash.com/photo-1485797460056-2310c82d1213?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }, 
            { id: 5, title: '标题', image: 'https://images.unsplash.com/photo-1605116188625-8522bf02d10f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }]
    })
}

</script>

<template>
    <div>
        <div style="width: 75vw;">
            <ProTable rowKey="id" v-model:page="page" :request :options>
                <template #table-image={row}>
                    <img style="height: 80px" :src="row.image"/>
                </template>
            </ProTable>
        </div>
    </div>
</template>
```
</details>

#### 方式二：JSX 形式
<div style="margin-top: 24px">
    <MyRenderTwo />
</div>

<details>
  <summary>
    点击查看代码
  </summary>

```vue
<script setup lang="tsx">
import { ref } from 'vue';
import { ProTableOption, ProTableRequest } from 'tdesign-pro-component';
const page = ref({ pageNum: 1, pageSize: 10 });

const options: ProTableOption[] = [
    {
        key: 'id',
        title: '编号',
        hideInSearch: true,
    },
    {
        key: 'title',
        title: '标题',

    },
    {
        key: 'image',
        title: '图片',
        render: ({row}) => <img style="height: 80px" src={row.image} />
    }
];

function request(data: ProTableRequest<any>) {
    console.log('request', data);
    return Promise.resolve({
        total: 10,
        list: [
            { id: 1, title: '标题1', image: 'https://plus.unsplash.com/premium_photo-1661715304145-e686bb947289?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }, 
            { id: 2, title: '标题2', image: 'https://images.unsplash.com/photo-1516279232585-44b3f7e8bad4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }, 
            { id: 3, title: '标题3', image: 'https://images.unsplash.com/photo-1477847616630-cf9cf8815fda?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }, 
            { id: 4, title: '标题4', image: 'https://images.unsplash.com/photo-1485797460056-2310c82d1213?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }, 
            { id: 5, title: '标题', image: 'https://images.unsplash.com/photo-1605116188625-8522bf02d10f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }]
    })
}

</script>

<template>
    <div>
        <div style="width: 75vw;">
            <ProTable rowKey="id" v-model:page="page" :request :options>
            </ProTable>
        </div>
    </div>
</template>
```
</details>



## API

|属性名|类型|默认值|描述|必填|
|------|------|------|------|------|
|options|Array / ProTableOption |-| 表给配置项，根据该配置项渲染表格列和搜索内容|TRUE|
|request|Function / `(tableRequest:{pageNum: number, pageSize:number, form: T, sort: {[keyName]: 'desc' / 'asc'} }) => void` |-| 获取 dataSource 的方法|TRUE|
|rowKey| string |id| 行索引，取数据中，对应的属性，默认为 id。|FALSE|
|onSearchSuccess| Function / `(data: ProTableResult<any>) => any;` |-| 搜索成功后回调 |FALSE|
|onSearchFail| Function / `onSearchFail?: (exception: Error / string) => void;` |-| 搜索失败后回调 |FALSE|
|hideForm| boolean |false| 隐藏表单 |FALSE|
|hidePage| boolean |false| 隐藏分页器 |FALSE|
|searchNum| number |3| 展示搜索项数量 |FALSE|
|loadingAble| boolean |true| 开启加载状态 |FALSE|
|size| string / `large / medium / small` |medium| 表格大小 |FALSE|
|filterEmptyStr| boolean |true| 过滤 `null/''/undefined` 字段 |FALSE|
|bordered| boolean |false| 边框 |FALSE|
|stripe| boolean |false| 斑马纹 |FALSE|
|hover| boolean |false| 鼠标悬浮 |FALSE|

