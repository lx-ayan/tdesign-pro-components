<script setup lang="ts">
import BasicProFormText from '../demo/ProFormText/BasicProFormText.vue';
import FormRuleForm from '../demo/ProFormText/FormRuleForm.vue';
import DectoraFormText from '../demo/ProFormText/DectoraFormText.vue';


</script>
# ProFormText

ProFormText, 由表单和输入框相结合的一个组件。把原生的 t-input 和 t-form-item 进行二次处理。

## 基本使用

<BasicProFormText/>

## 表单验证

<FormRuleForm/>

## 装饰器的输入框

<DectoraFormText/>

## API
## ProFormTextProps

|属性名|类型|默认值|描述|必填|
|------|------|------|------|------|
|name|string|-|表单名称|TRUE|
|modelValue|string|-|数据源，`v-model`|TRUE|
|label|string|-| 表单描述 |TRUE|
|placeholder|string|-| 输入框描述 |FALSE|
|autofocus|boolean|false| 自动聚焦篇 |FALSE|
|borderless|boolean|-| 边框 |FALSE|
|clearable|boolean|false| 允许清空 |FALSE|
|disabled|boolean|false| 禁用状态 |FALSE|
|readonly|boolean|false| 只读状态 |FALSE|
|size|string / `medium` / `small` / `large`|-| 尺寸大小 |FALSE|
|type|string / `text` / `password`/ `textarea` |text| 文本框类型 |FALSE|
|align|string /`left` / `center` / `right`|-| 文本对齐 |FALSE|
|append|Object / `(() => (TNode / VNode))` / `TNode` / `VNode`|-| 后缀装饰 |FALSE|
|prepend|Object / `(() => (TNode / VNode))` / `TNode` / `VNode`|-| 前缀装饰 |FALSE|
|inputProps|Object / `InputProps`|-| 文本框其他属性。[参考详情](https://tdesign.tencent.com/vue-next/components/input?tab=api "InputProps") |FALSE|
|labelWidth|string /number|-| 标签宽度 |FALSE|
|labelAlign|string /`left` / `top` / `right`|-| 标签对齐方式 |FALSE|
|rules|Array /` Array<FormRule>`|-| 表单验证 |FALSE|
|formItemProps|  Object/ `FormItemProps`|-| 表单其他属性。[参考详情](https://tdesign.tencent.com/vue-next/components/form?tab=api "FormProps") |FALSE|


## ProFormTextRef
```typescript
/**
 * @description
 * focus: 聚焦
 * blur: 失去焦点
 * clear: 清空
 * getValue: 手动获取输入数据
 * getRef 获取 TDesign Input ref 实例
 * 
 */
export interface ProFormTextRef {
    focus: () => void;
    blur: () => void;
    clear: () => void;
    getValue: () => ValueType;
    getRef: <T extends any = any> () => T
}
```