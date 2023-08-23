import { RouteRecordRaw } from 'vue-router';

const pageTitle = (name: string): string => {
    return `pagesTitle.${name}`;
};

/*
 * 静态路由
 */
const staticRoutes: Array<RouteRecordRaw> = [
    {
        // 登录页
        path: '/login',
        name: 'login',
        component: () => import('/@/views/login.vue'),
        meta: {
            title: pageTitle('login'),
        },
    },
    {
        // 404
        path: '/404',
        name: 'notFound',
        component: () => import('/@/views/common/error/404.vue'),
        meta: {
            title: pageTitle('notFound'), // 页面不存在
        },
    },
    {
        // 后台找不到页面了-可能是路由未加载上
        path: '/:path(.*)*',
        redirect: (to) => {
            return {
                name: 'mainLoading',
                params: {
                    to: JSON.stringify({
                        path: to.path,
                        query: to.query,
                    }),
                },
            };
        },
    },
    {
        // 无权限访问
        path: '/401',
        name: 'noPower',
        component: () => import('/@/views/common/error/401.vue'),
        meta: {
            title: pageTitle('noPower'),
        },
    },
];

const baseRoute: RouteRecordRaw = {
    path: '/',
    name: '/',
    component: () => import('/@/layouts/index.vue'),
    redirect: '/loading',
    meta: {
        title: pageTitle('home'),
    },
    children: [
        {
            path: 'loading/:to?',
            name: 'mainLoading',
            component: () => import('/@/layouts/common/components/loading.vue'),
            meta: {
                title: pageTitle('Loading'),
            },
        },
    ],
};

staticRoutes.push(baseRoute);

export { staticRoutes, baseRoute };
