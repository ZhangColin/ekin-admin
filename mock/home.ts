export default [
    {
        url: '/Dashboard/dashboard',
        method: 'get',
        response: () => {
            return {
                code: 200,
                message: '',
                time: 1689646424,
                data: {
                    remark: '开源等于互助；开源需要大家一起来支持，支持的方式有很多种，比如使用、推荐、写教程、保护生态、贡献代码、回答问题、分享经验、打赏赞助等；欢迎您加入我们！',
                },
            };
        },
    },
    {
        url: '/Index/index',
        method: 'get',
        response: () => {
            return {
                code: 200,
                message: '',
                time: 1689857077,
                data: {
                    adminInfo: {
                        id: 1,
                        username: 'admin',
                        nickname: 'Admin',
                        avatar: 'https://demo.buildadmin.com/static/images/avatar.png',
                        last_login_time: '2023-07-20 20:44:38',
                        super: true,
                    },
                    menus: [
                        {
                            id: 1,
                            pid: 0,
                            type: 'menu',
                            title: '控制台',
                            name: 'dashboard/dashboard',
                            path: 'dashboard',
                            icon: 'fa fa-dashboard',
                            menu_type: 'tab',
                            url: '',
                            component: '/src/views/dashboard.vue',
                            keepalive: 'dashboard/dashboard',
                            extend: 'none',
                        },
                        {
                            id: 2,
                            pid: 0,
                            type: 'menu_dir',
                            title: '系统管理',
                            name: 'system',
                            path: 'system',
                            icon: 'fa fa-group',
                            menu_type: null,
                            url: '',
                            component: '',
                            keepalive: 0,
                            extend: 'none',
                            children: [
                                {
                                    id: 3,
                                    pid: 2,
                                    type: 'menu',
                                    title: '角色管理',
                                    name: 'system/role',
                                    path: 'system/role',
                                    icon: 'fa fa-group',
                                    menu_type: 'tab',
                                    url: '',
                                    component: '/src/views/system/role/index.vue',
                                    keepalive: 'system/role',
                                    extend: 'none',
                                    children: [
                                        {
                                            id: 4,
                                            pid: 3,
                                            type: 'button',
                                            title: '查看',
                                            name: 'system/role/index',
                                            path: '',
                                            icon: '',
                                            menu_type: null,
                                            url: '',
                                            component: '',
                                            keepalive: 0,
                                            extend: 'none',
                                        },
                                        {
                                            id: 5,
                                            pid: 3,
                                            type: 'button',
                                            title: '添加',
                                            name: 'system/role/add',
                                            path: '',
                                            icon: '',
                                            menu_type: null,
                                            url: '',
                                            component: '',
                                            keepalive: 0,
                                            extend: 'none',
                                        },
                                        {
                                            id: 6,
                                            pid: 3,
                                            type: 'button',
                                            title: '编辑',
                                            name: 'system/role/edit',
                                            path: '',
                                            icon: '',
                                            menu_type: null,
                                            url: '',
                                            component: '',
                                            keepalive: 0,
                                            extend: 'none',
                                        },
                                        {
                                            id: 7,
                                            pid: 3,
                                            type: 'button',
                                            title: '删除',
                                            name: 'system/role/del',
                                            path: '',
                                            icon: '',
                                            menu_type: null,
                                            url: '',
                                            component: '',
                                            keepalive: 0,
                                            extend: 'none',
                                        },
                                    ],
                                },
                                {
                                    id: 8,
                                    pid: 2,
                                    type: 'menu',
                                    title: '用户管理',
                                    name: 'system/user',
                                    path: 'system/user',
                                    icon: 'el-icon-UserFilled',
                                    menu_type: 'tab',
                                    url: '',
                                    component: '/src/views/system/user/index.vue',
                                    keepalive: 'system/user',
                                    extend: 'none',
                                    children: [
                                        {
                                            id: 9,
                                            pid: 8,
                                            type: 'button',
                                            title: '查看',
                                            name: 'system/user/index',
                                            path: '',
                                            icon: '',
                                            menu_type: null,
                                            url: '',
                                            component: '',
                                            keepalive: 0,
                                            extend: 'none',
                                        },
                                        {
                                            id: 10,
                                            pid: 8,
                                            type: 'button',
                                            title: '添加',
                                            name: 'system/user/add',
                                            path: '',
                                            icon: '',
                                            menu_type: null,
                                            url: '',
                                            component: '',
                                            keepalive: 0,
                                            extend: 'none',
                                        },
                                        {
                                            id: 11,
                                            pid: 8,
                                            type: 'button',
                                            title: '编辑',
                                            name: 'system/user/edit',
                                            path: '',
                                            icon: '',
                                            menu_type: null,
                                            url: '',
                                            component: '',
                                            keepalive: 0,
                                            extend: 'none',
                                        },
                                        {
                                            id: 12,
                                            pid: 8,
                                            type: 'button',
                                            title: '删除',
                                            name: 'system/user/del',
                                            path: '',
                                            icon: '',
                                            menu_type: null,
                                            url: '',
                                            component: '',
                                            keepalive: 0,
                                            extend: 'none',
                                        },
                                    ],
                                },
                                {
                                    id: 13,
                                    pid: 2,
                                    type: 'menu',
                                    title: '菜单管理',
                                    name: 'system/menu',
                                    path: 'system/menu',
                                    icon: 'el-icon-Grid',
                                    menu_type: 'tab',
                                    url: '',
                                    component: '/src/views/system/menu/index.vue',
                                    keepalive: 'system/menu',
                                    extend: 'none',
                                    children: [
                                        {
                                            id: 14,
                                            pid: 13,
                                            type: 'button',
                                            title: '查看',
                                            name: 'system/menu/index',
                                            path: '',
                                            icon: '',
                                            menu_type: null,
                                            url: '',
                                            component: '',
                                            keepalive: 0,
                                            extend: 'none',
                                        },
                                        {
                                            id: 15,
                                            pid: 13,
                                            type: 'button',
                                            title: '添加',
                                            name: 'system/menu/add',
                                            path: '',
                                            icon: '',
                                            menu_type: null,
                                            url: '',
                                            component: '',
                                            keepalive: 0,
                                            extend: 'none',
                                        },
                                        {
                                            id: 16,
                                            pid: 13,
                                            type: 'button',
                                            title: '编辑',
                                            name: 'system/menu/edit',
                                            path: '',
                                            icon: '',
                                            menu_type: null,
                                            url: '',
                                            component: '',
                                            keepalive: 0,
                                            extend: 'none',
                                        },
                                        {
                                            id: 17,
                                            pid: 13,
                                            type: 'button',
                                            title: '删除',
                                            name: 'system/menu/del',
                                            path: '',
                                            icon: '',
                                            menu_type: null,
                                            url: '',
                                            component: '',
                                            keepalive: 0,
                                            extend: 'none',
                                        },
                                        {
                                            id: 18,
                                            pid: 13,
                                            type: 'button',
                                            title: '快速排序',
                                            name: 'system/menu/sortable',
                                            path: '',
                                            icon: '',
                                            menu_type: null,
                                            url: '',
                                            component: '',
                                            keepalive: 0,
                                            extend: 'none',
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                    siteConfig: {
                        siteName: 'BuildAdmin演示站',
                        version: 'v1.0.0',
                        cdnUrl: 'https://demo.buildadmin.com',
                        apiUrl: 'https://buildadmin.com',
                        upload: {
                            maxsize: 10485760,
                            savename: '/storage/{topic}/{year}{mon}{day}/{filename}{filesha1}{.suffix}',
                            mimetype: 'jpg,png,bmp,jpeg,gif,webp,zip,rar,xls,xlsx,doc,docx,wav,mp4,mp3,txt',
                            mode: 'local',
                        },
                    },
                    terminal: {
                        installServicePort: '8000',
                        npmPackageManager: 'pnpm',
                    },
                },
            };
        },
    },
];
