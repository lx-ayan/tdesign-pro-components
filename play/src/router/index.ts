import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
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
                }
            ]
        }
    ]
});

export default router;