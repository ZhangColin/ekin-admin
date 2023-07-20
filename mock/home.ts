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
                "code": 200,
                "message": "",
                "time": 1689857077,
                "data": {
                    "adminInfo": {
                        "id": 1,
                        "username": "admin",
                        "nickname": "Admin",
                        "avatar": "https:\/\/demo.buildadmin.com\/static\/images\/avatar.png",
                        "last_login_time": "2023-07-20 20:44:38",
                        "super": true
                    },
                    "menus": [
                        {
                            "id": 1,
                            "pid": 0,
                            "type": "menu",
                            "title": "控制台",
                            "name": "dashboard\/dashboard",
                            "path": "dashboard",
                            "icon": "fa fa-dashboard",
                            "menu_type": "tab",
                            "url": "",
                            "component": "\/src\/views\/dashboard.vue",
                            "keepalive": "dashboard\/dashboard",
                            "extend": "none"
                        },
                        {
                            "id": 2,
                            "pid": 0,
                            "type": "menu_dir",
                            "title": "系统管理",
                            "name": "auth",
                            "path": "auth",
                            "icon": "fa fa-group",
                            "menu_type": null,
                            "url": "",
                            "component": "",
                            "keepalive": 0,
                            "extend": "none",
                            "children": [
                                {
                                    "id": 3,
                                    "pid": 2,
                                    "type": "menu",
                                    "title": "角色组管理",
                                    "name": "auth\/group",
                                    "path": "auth\/group",
                                    "icon": "fa fa-group",
                                    "menu_type": "tab",
                                    "url": "",
                                    "component": "\/src\/views\/auth\/group\/index.vue",
                                    "keepalive": "auth\/group",
                                    "extend": "none",
                                    "children": [
                                        {
                                            "id": 4,
                                            "pid": 3,
                                            "type": "button",
                                            "title": "查看",
                                            "name": "auth\/group\/index",
                                            "path": "",
                                            "icon": "",
                                            "menu_type": null,
                                            "url": "",
                                            "component": "",
                                            "keepalive": 0,
                                            "extend": "none"
                                        },
                                        {
                                            "id": 5,
                                            "pid": 3,
                                            "type": "button",
                                            "title": "添加",
                                            "name": "auth\/group\/add",
                                            "path": "",
                                            "icon": "",
                                            "menu_type": null,
                                            "url": "",
                                            "component": "",
                                            "keepalive": 0,
                                            "extend": "none"
                                        },
                                        {
                                            "id": 6,
                                            "pid": 3,
                                            "type": "button",
                                            "title": "编辑",
                                            "name": "auth\/group\/edit",
                                            "path": "",
                                            "icon": "",
                                            "menu_type": null,
                                            "url": "",
                                            "component": "",
                                            "keepalive": 0,
                                            "extend": "none"
                                        },
                                        {
                                            "id": 7,
                                            "pid": 3,
                                            "type": "button",
                                            "title": "删除",
                                            "name": "auth\/group\/del",
                                            "path": "",
                                            "icon": "",
                                            "menu_type": null,
                                            "url": "",
                                            "component": "",
                                            "keepalive": 0,
                                            "extend": "none"
                                        }
                                    ]
                                },
                                {
                                    "id": 8,
                                    "pid": 2,
                                    "type": "menu",
                                    "title": "管理员管理",
                                    "name": "auth\/admin",
                                    "path": "auth\/admin",
                                    "icon": "el-icon-UserFilled",
                                    "menu_type": "tab",
                                    "url": "",
                                    "component": "\/src\/views\/auth\/admin\/index.vue",
                                    "keepalive": "auth\/admin",
                                    "extend": "none",
                                    "children": [
                                        {
                                            "id": 9,
                                            "pid": 8,
                                            "type": "button",
                                            "title": "查看",
                                            "name": "auth\/admin\/index",
                                            "path": "",
                                            "icon": "",
                                            "menu_type": null,
                                            "url": "",
                                            "component": "",
                                            "keepalive": 0,
                                            "extend": "none"
                                        },
                                        {
                                            "id": 10,
                                            "pid": 8,
                                            "type": "button",
                                            "title": "添加",
                                            "name": "auth\/admin\/add",
                                            "path": "",
                                            "icon": "",
                                            "menu_type": null,
                                            "url": "",
                                            "component": "",
                                            "keepalive": 0,
                                            "extend": "none"
                                        },
                                        {
                                            "id": 11,
                                            "pid": 8,
                                            "type": "button",
                                            "title": "编辑",
                                            "name": "auth\/admin\/edit",
                                            "path": "",
                                            "icon": "",
                                            "menu_type": null,
                                            "url": "",
                                            "component": "",
                                            "keepalive": 0,
                                            "extend": "none"
                                        },
                                        {
                                            "id": 12,
                                            "pid": 8,
                                            "type": "button",
                                            "title": "删除",
                                            "name": "auth\/admin\/del",
                                            "path": "",
                                            "icon": "",
                                            "menu_type": null,
                                            "url": "",
                                            "component": "",
                                            "keepalive": 0,
                                            "extend": "none"
                                        }
                                    ]
                                },
                                {
                                    "id": 13,
                                    "pid": 2,
                                    "type": "menu",
                                    "title": "菜单规则管理",
                                    "name": "auth\/rule",
                                    "path": "auth\/rule",
                                    "icon": "el-icon-Grid",
                                    "menu_type": "tab",
                                    "url": "",
                                    "component": "\/src\/views\/auth\/rule\/index.vue",
                                    "keepalive": "auth\/rule",
                                    "extend": "none",
                                    "children": [
                                        {
                                            "id": 14,
                                            "pid": 13,
                                            "type": "button",
                                            "title": "查看",
                                            "name": "auth\/rule\/index",
                                            "path": "",
                                            "icon": "",
                                            "menu_type": null,
                                            "url": "",
                                            "component": "",
                                            "keepalive": 0,
                                            "extend": "none"
                                        },
                                        {
                                            "id": 15,
                                            "pid": 13,
                                            "type": "button",
                                            "title": "添加",
                                            "name": "auth\/rule\/add",
                                            "path": "",
                                            "icon": "",
                                            "menu_type": null,
                                            "url": "",
                                            "component": "",
                                            "keepalive": 0,
                                            "extend": "none"
                                        },
                                        {
                                            "id": 16,
                                            "pid": 13,
                                            "type": "button",
                                            "title": "编辑",
                                            "name": "auth\/rule\/edit",
                                            "path": "",
                                            "icon": "",
                                            "menu_type": null,
                                            "url": "",
                                            "component": "",
                                            "keepalive": 0,
                                            "extend": "none"
                                        },
                                        {
                                            "id": 17,
                                            "pid": 13,
                                            "type": "button",
                                            "title": "删除",
                                            "name": "auth\/rule\/del",
                                            "path": "",
                                            "icon": "",
                                            "menu_type": null,
                                            "url": "",
                                            "component": "",
                                            "keepalive": 0,
                                            "extend": "none"
                                        },
                                        {
                                            "id": 18,
                                            "pid": 13,
                                            "type": "button",
                                            "title": "快速排序",
                                            "name": "auth\/rule\/sortable",
                                            "path": "",
                                            "icon": "",
                                            "menu_type": null,
                                            "url": "",
                                            "component": "",
                                            "keepalive": 0,
                                            "extend": "none"
                                        }
                                    ]
                                },
                                {
                                    "id": 19,
                                    "pid": 2,
                                    "type": "menu",
                                    "title": "管理员日志管理",
                                    "name": "auth\/adminLog",
                                    "path": "auth\/adminLog",
                                    "icon": "el-icon-List",
                                    "menu_type": "tab",
                                    "url": "",
                                    "component": "\/src\/views\/auth\/adminLog\/index.vue",
                                    "keepalive": "auth\/adminLog",
                                    "extend": "none",
                                    "children": [
                                        {
                                            "id": 20,
                                            "pid": 19,
                                            "type": "button",
                                            "title": "查看",
                                            "name": "auth\/adminLog\/index",
                                            "path": "",
                                            "icon": "",
                                            "menu_type": null,
                                            "url": "",
                                            "component": "",
                                            "keepalive": 0,
                                            "extend": "none"
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "siteConfig": {
                        "siteName": "BuildAdmin演示站",
                        "version": "v1.0.0",
                        "cdnUrl": "https:\/\/demo.buildadmin.com",
                        "apiUrl": "https:\/\/buildadmin.com",
                        "upload": {
                            "maxsize": 10485760,
                            "savename": "\/storage\/{topic}\/{year}{mon}{day}\/{filename}{filesha1}{.suffix}",
                            "mimetype": "jpg,png,bmp,jpeg,gif,webp,zip,rar,xls,xlsx,doc,docx,wav,mp4,mp3,txt",
                            "mode": "local"
                        }
                    },
                    "terminal": {
                        "installServicePort": "8000",
                        "npmPackageManager": "pnpm"
                    }
                }
            };
        },
    },
];
