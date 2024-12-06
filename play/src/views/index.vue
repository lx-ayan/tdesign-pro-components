<script setup lang='tsx'>
import { ref, onMounted } from 'vue';
const header = { title: () => (<t-typography-title > tdesign-pro-component</t-typography-title>) }
const images = [
    'https://images.unsplash.com/photo-1719997794492-b51b453a162e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1532458198880-add09ce3b2f5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1517422688858-c17ab068121c?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1506158669146-619067262a00?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1517299321609-52687d1bc55a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1534335386084-00852ed574eb?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1517095110280-5ac9879aca68?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1731663908391-b1da1bbccb23?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1731954535271-9a79a2122855?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1604336103113-343e90e918db?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

]
function getRandomImage() {
    let idx = Math.floor(Math.random() * images.length);
    return images[idx];
}

const cardList = ref<any[]>([
    {
        title: '简单易用',
        description: '简单易用，一个组件≈一个页面，将业务集中于 JavaScript 部分'
    },
    {
        title: 'TDesign',
        description: '与 TDesign 设计体系一脉相承，无缝衔接 TDesign Vue 项目'
    },
    {
        title: 'TypeScript',
        description: '使用 TypeScript 开发，提供完整的类型定义文件，无需频繁打开官网查看'
    }
]);

onMounted(() => {
    cardList.value.forEach(item => {
        item.img = getRandomImage();
        console.log('item.img', item.img);
    })
})

</script>

<template>
    <div>
        <div class="flex mytitle">
            TDesign-Pro-Component
        </div>
        <div class="flex mydescription">
            🏆 快速高效的开发中后台应用
        </div>
        <div class="flex">
            <router-link to="/home">
                <t-button size="large">
                    快速开始
                </t-button>
            </router-link>
        </div>
        <div class="flex2" style="margin-top: 140px;">
            <t-card v-for="item, index in cardList" theme="poster2" :style="{ width: '400px' }">
                <template #cover>
                    <img :src="item.img" />
                </template>
                <template #footer>
                    <t-comment :author="item.title" :content="item.description" />
                </template>
            </t-card>
        </div>
    </div>
</template>

<style lang='scss' scoped>
.flex {
    display: flex;
    justify-content: center;
    align-items: center;
}

.mytitle {
    margin-top: 100px;
    color: #101d37;
    font-weight: 600;
    font-size: 48px;
    line-height: 58px;
}

.mydescription {
    color: #6b7280;
    font-size: 24px;
    margin-top: 24px;
    margin-bottom: 48px;
    font-weight: 600;
    letter-spacing: 2px;
}

.flex2 {
    width: 80%;
    display: flex;
    margin: 0 auto;
    justify-content: space-around;
    align-items: center;
}
</style>