<script setup lang='tsx'>
//@ts-ignore
import ApiMarkdown from '../markdown/RowContainer/Api.md?raw';

//@ts-ignore
import One from '../markdown/RowContainer/One.md?raw';
import useTabActiveKey, { tabList } from '../utils/useTabActiveKey';
const header = {
    title: () => <t-typography-title>RowContainer 行容器组件</t-typography-title>
}
document.documentElement.setAttribute('theme-mode', 'dark');
const { tabActiveKey, tabChange } = useTabActiveKey('1');
</script>

<template>
    <PageContainer :header :tabActiveKey :tabList @tab-change="tabChange">
        <template #description>
            <t-typography-paragraph>
                <t-typography-text>
                    RowContainer 是一个高频使用的组件，这个组件将默认的行内容进行处理。该组件具有固定布局，所以定制化并不高。正常布局该组件即可。
                </t-typography-text>
            </t-typography-paragraph>
        </template>
        <template v-if="tabActiveKey == '1'">
            <RowContainer imageWidth="280" imageAlign="left">
                <template #image>
                    <img style="width: 280px"
                        src="https://images.unsplash.com/photo-1506158669146-619067262a00?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </template>

                <template #title>
                    <div>
                        <span>安高城市天地</span>
                        <span :style="{ marginLeft: '8px', fontSize: '14px', color: '#c2cad7' }">H20241210152210</span>
                    </div>
                </template>

                <template #actions>
                    <div style="text-align: right">
                        <t-button variant="text">
                            <template #icon><t-icon name="heart"></t-icon></template>关注</t-button>
                        <t-button variant="text">
                            <template #icon><t-icon name="user"></t-icon></template>约谈</t-button>
                        <t-button variant="text">
                            <template #icon><t-icon name="edit"></t-icon></template>
                            编辑
                        </t-button>
                        <t-button variant="text">
                            <template #icon><t-icon name="more"></t-icon></template>
                        </t-button>
                    </div>
                </template>

                <template #description>
                    <div>
                        <div :style="{ marginBottom: '8px', display: 'flex', alignItems: 'center' }">
                            <t-icon :style="{ marginRight: '12px' }" name="home" size="14"></t-icon>
                            高层/共33层 | 2019 年建 | 2室2厅1厨1卫2阳台 | 120 ㎡ | 南北通透 | 精装
                        </div>
                        <div :style="{ marginBottom: '8px', display: 'flex', alignItems: 'center' }">
                            <t-icon :style="{ marginRight: '12px' }" name="location" size="14"></t-icon>
                            蜀山区--南七 | 望江西路199号
                        </div>
                        <div>
                            <t-icon :style="{ marginRight: '12px' }" name="browse" size="14"></t-icon>
                            10 人关注 | 1天前挂牌 | 近15天带看3次 | 5天前跟进
                        </div>
                    </div>
                </template>

                <template #footer>
                    <div>
                        <t-tag size="large" :style="{ marginRight: '12px' }" theme="warning">在售</t-tag>
                        <t-tag size="large" :style="{ marginRight: '12px' }">地铁房</t-tag>
                        <t-tag size="large" :style="{ marginRight: '12px' }">精装修</t-tag>
                        <t-tag size="large">满二</t-tag>
                    </div>
                </template>
            </RowContainer>

            <div style="margin-top: 12px;">
                <RowContainer
                    image="https://images.unsplash.com/photo-1719997794492-b51b453a162e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    imageView imageWidth="280px" imageAlign="left">

                    <template #title>
                        <div>
                            <span>安高城市天地</span>
                            <span
                                :style="{ marginLeft: '8px', fontSize: '14px', color: '#c2cad7' }">H20241210152210</span>
                        </div>
                    </template>

                    <template #actions>
                        <div style="text-align: right">
                            <t-button variant="text">
                                <template #icon><t-icon name="heart"></t-icon></template>关注</t-button>
                            <t-button variant="text">
                                <template #icon><t-icon name="user"></t-icon></template>约谈</t-button>
                            <t-button variant="text">
                                <template #icon><t-icon name="edit"></t-icon></template>
                                编辑
                            </t-button>
                            <t-button variant="text">
                                <template #icon><t-icon name="more"></t-icon></template>
                            </t-button>
                        </div>
                    </template>

                    <template #description>
                        <div>
                            <div :style="{ marginBottom: '8px', display: 'flex', alignItems: 'center' }">
                                <t-icon :style="{ marginRight: '12px' }" name="home" size="14"></t-icon>
                                高层/共33层 | 2019 年建 | 2室2厅1厨1卫2阳台 | 120 ㎡ | 南北通透 | 精装
                            </div>
                            <div :style="{ marginBottom: '8px', display: 'flex', alignItems: 'center' }">
                                <t-icon :style="{ marginRight: '12px' }" name="location" size="14"></t-icon>
                                蜀山区--南七 | 望江西路199号
                            </div>
                            <div>
                                <t-icon :style="{ marginRight: '12px' }" name="browse" size="14"></t-icon>
                                10 人关注 | 1天前挂牌 | 近15天带看3次 | 5天前跟进
                            </div>
                        </div>
                    </template>

                    <template #footer>
                        <div>
                            <t-tag size="large" :style="{ marginRight: '12px' }" theme="warning">在售</t-tag>
                            <t-tag size="large" :style="{ marginRight: '12px' }">地铁房</t-tag>
                            <t-tag size="large" :style="{ marginRight: '12px' }">精装修</t-tag>
                            <t-tag size="large">满二</t-tag>
                        </div>
                    </template>
                </RowContainer>
            </div>

            <div style="margin-top: 12px;">
                <RowContainer
                    image="https://images.unsplash.com/photo-1719997794492-b51b453a162e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    imageView imageWidth="280px" imageAlign="right">

                    <template #title>
                        <div>
                            <span>安高城市天地</span>
                            <span
                                :style="{ marginLeft: '8px', fontSize: '14px', color: '#c2cad7' }">H20241210152210</span>
                        </div>
                    </template>

                    <template #actions>
                        <div style="text-align: right">
                            <t-button variant="text">
                                <template #icon><t-icon name="heart"></t-icon></template>关注</t-button>
                            <t-button variant="text">
                                <template #icon><t-icon name="user"></t-icon></template>约谈</t-button>
                            <t-button variant="text">
                                <template #icon><t-icon name="edit"></t-icon></template>
                                编辑
                            </t-button>
                            <t-button variant="text">
                                <template #icon><t-icon name="more"></t-icon></template>
                            </t-button>
                        </div>
                    </template>

                    <template #description>
                        <div>
                            <div :style="{ marginBottom: '8px', display: 'flex', alignItems: 'center' }">
                                <t-icon :style="{ marginRight: '12px' }" name="home" size="14"></t-icon>
                                高层/共33层 | 2019 年建 | 2室2厅1厨1卫2阳台 | 120 ㎡ | 南北通透 | 精装
                            </div>
                            <div :style="{ marginBottom: '8px', display: 'flex', alignItems: 'center' }">
                                <t-icon :style="{ marginRight: '12px' }" name="location" size="14"></t-icon>
                                蜀山区--南七 | 望江西路199号
                            </div>
                            <div>
                                <t-icon :style="{ marginRight: '12px' }" name="browse" size="14"></t-icon>
                                10 人关注 | 1天前挂牌 | 近15天带看3次 | 5天前跟进
                            </div>
                        </div>
                    </template>

                    <template #footer>
                        <div>
                            <t-tag size="large" :style="{ marginRight: '12px' }" theme="warning">在售</t-tag>
                            <t-tag size="large" :style="{ marginRight: '12px' }">地铁房</t-tag>
                            <t-tag size="large" :style="{ marginRight: '12px' }">精装修</t-tag>
                            <t-tag size="large">满二</t-tag>
                        </div>
                    </template>
                </RowContainer>
            </div>

            <MdPreview id="ButtonApi" :modelValue="One" />

        </template>

        <div v-else>
            <MdPreview id="ButtonApi" :modelValue="ApiMarkdown" />
        </div>
    </PageContainer>
</template>

<style lang='scss'></style>