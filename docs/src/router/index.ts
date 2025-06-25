import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('../pages/Home.vue')
    },
    {
        path: '/pro-form-text',
        component: () => import('../pages/ProFormText/index.vue')
    },
    {
        path: '/pro-form-select',
        component: () => import('../pages/ProFormSelect/index.vue')
    },
    {
        path: '/pro-form-radio',
        component: () => import('../pages/ProFormRadio/index.vue')
    },
    {
        path: '/pro-form-checkbox',
        component: () => import('../pages/ProFormCheckbox/index.vue')
    },
    {
        path: '/pro-form-date-picker',
        component: () => import('../pages/ProFormDatePicker/index.vue')
    },
    {
        path: '/pro-form-date-picker-range',
        component: () => import('../pages/ProFormDatePickerRange/index.vue')
    },
    {
        path: '/pro-form-input-number',
        component: () => import('../pages/ProFormInputNumber/index.vue')
    },
    {
        path: '/pro-form',
        component: () => import('../pages/ProForm/index.vue')
    },
    {
        path: '/pro-table',
        component: () => import('../pages/ProTable/index.vue')
    },
    {
        path: '/modal-form',
        component: () => import('../pages/ModalForm/index.vue')
    },
    {
        path: '/row-container',
        component: () => import('../pages/RowContainer/index.vue')
    },
    {
        path: '/page-container',
        component: () => import('../pages/PageContainer/index.vue')
    },
    {
        path: '/pro-button',
        component: () => import('../pages/ProButton/index.vue')
    },
    {
        path: '/pro-layout',
        component: () => import('../pages/ProLayout/index.vue')
    }

    
]

const router = createRouter({
    history: createWebHistory('/tdesign-pro-component'),
    routes: routes,
});

export default router;