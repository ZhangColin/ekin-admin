import { Layout } from '@/utils/routerHelper';

export const system = {
  path: '/system',
  component: Layout,
  redirect: '/system/user',
  name: 'System',
  meta: {
    title: '系统管理',
    icon: 'ant-design:dashboard-filled',
    alwaysShow: false,
  },
  children: [
    {
      path: 'organization',
      component: () => import('@/views/Dashboard/Workplace.vue'),
      name: 'Organization',
      meta: {
        title: '组织管理',
        icon: 'ant-design:dashboard-filled',
      },
    },
    {
      path: 'user',
      component: () => import('@/views/Dashboard/Workplace.vue'),
      name: 'User',
      meta: {
        title: '用户管理',
        icon: 'ant-design:dashboard-filled',
      },
    },
    {
      path: 'role',
      component: () => import('@/views/Dashboard/Workplace.vue'),
      name: 'Role',
      meta: {
        title: '角色管理',
        icon: 'ant-design:dashboard-filled',
      },
    },
    {
      path: 'resource',
      component: () => import('@/views/Dashboard/Workplace.vue'),
      name: 'Resource',
      meta: {
        title: '资源管理',
        icon: 'ant-design:dashboard-filled',
      },
      children: [
        {
          path: 'resource-category',
          component: () => import('@/views/Dashboard/Workplace.vue'),
          name: 'ResourceCategory',
          meta: {
            title: '资源分类',
            icon: 'ant-design:dashboard-filled',
          },
        },
      ],
    },
    {
      path: 'menu',
      component: () => import('@/views/Dashboard/Workplace.vue'),
      name: 'Menu',
      meta: {
        title: '菜单管理',
        icon: 'ant-design:dashboard-filled',
      },
    },
    {
      path: 'dictionary',
      component: () => import('@/views/Dashboard/Workplace.vue'),
      name: 'Dictionary',
      meta: {
        title: '字典管理',
        icon: 'ant-design:dashboard-filled',
      },
      children: [
        {
          path: 'dictionary-item',
          component: () => import('@/views/Dashboard/Workplace.vue'),
          name: 'DictionaryItem',
          meta: {
            title: '字典项',
            icon: 'ant-design:dashboard-filled',
          },
        },
      ],
    },
  ],
};
