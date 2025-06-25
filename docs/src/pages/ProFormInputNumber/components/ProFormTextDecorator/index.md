```vue
<script setup lang="tsx">
import { Icon, MessagePlugin } from 'tdesign-vue-next';
const suffixIcon = () => <Icon style={{ cursor: 'pointer' }} onClick={handleClick} name="search"></Icon>;
const prepend = 'https://';
const append = <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', border: '1px solid #ddd'}}>.com</div>

function handleClick() {
    MessagePlugin.success('搜索')
}
</script>

<template>
        <t-typography-title level="h3"><span id="ProFormInputNumberDecorator">表单装饰器</span></t-typography-title>
        <ProFormInputNumber inputLabel="价格" suffix="$" name="password1" />
        <ProFormInputNumber :suffixIcon="suffixIcon" name="password2" />
        <ProFormInputNumber :prepend="prepend" :append="append" name="password3" />
</template>
```