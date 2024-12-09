import { createWebHistory } from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/index.vue')
        },
        {
            path: '/home',
            component: () => import('../views/Home.vue')
        },
        {
            path:'/components',
            component: () => import('../views/Components.vue'),
            redirect: '/pro-table',
            children: [
                {
                    path: '/pro-table',
                    component: () => import('../views/ProTable.vue')
                },
                {
                    path: '/pro-form',
                    component: () => import('../views/ProForm.vue')
                },
                {
                    path: '/pro-layout',
                    component: () => import('../views/ProLayout.vue')
                },
                {
                    path: '/page-container',
                    component: () => import('../views/PageContainer.vue')
                },
                {
                    path: '/pro-button',
                    component: () => import('../views/ProButton.vue')
                }
            ]
        }
    ]
});

export default router;