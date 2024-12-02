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
                }
            ]
        }
    ]
});

export default router;