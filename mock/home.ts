export default [
    {
        url: '/Dashboard/dashboard',
        method: 'get',
        response: () => {
            return {
                code: 1,
                msg: '',
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
                code: 1,
                msg: '',
                time: 1689646423,
                data: {
                    adminInfo: {
                        id: 1,
                        username: 'admin',
                        nickname: 'Admin',
                        avatar: 'https://demo.buildadmin.com/static/images/avatar.png',
                        last_login_time: '2023-07-18 10:13:43',
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
                    ],
                    siteConfig: {
                        siteName: 'Cartisan',
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
                },
            };
        },
    },
];
