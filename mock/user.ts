export default [
    {
        url: '/admin/auth.Admin/index',
        method: 'get',
        response: () => {
            return {
                "code": 200,
                "message": "",
                "timestamp": 1689905961,
                "data": {
                    "list": [
                        {
                            "group_arr": [
                                1
                            ],
                            "group_name_arr": [
                                "超级管理组"
                            ],
                            "id": 1,
                            "username": "admin",
                            "nickname": "Admin",
                            "avatar": "https:\/\/demo.buildadmin.com\/static\/images\/avatar.png",
                            "email": "admin@buildadmin.com",
                            "mobile": "18888888887",
                            "last_login_time": "2023-07-21 10:19:21",
                            "last_login_ip": "101.228.76.54",
                            "motto": "",
                            "update_time": 1689905961,
                            "create_time": 1645876529,
                            "status": "1"
                        }
                    ],
                    "total": 1,
                    "remark": ""
                }
            };
        },
    },
    {
        url: '/admin/auth.Admin/edit',
        method: 'get',
        response: () => {
            return {
                "code": 200,
                "message": "",
                "time": 1689927204,
                "data": {
                    "row": {
                        "group_arr": [
                            1
                        ],
                        "group_name_arr": [
                            "超级管理组"
                        ],
                        "id": 1,
                        "username": "admin",
                        "nickname": "Admin",
                        "avatar": "https:\/\/demo.buildadmin.com\/static\/images\/avatar.png",
                        "email": "admin@buildadmin.com",
                        "mobile": "18888888887",
                        "last_login_time": "2023-07-21 16:13:25",
                        "last_login_ip": "101.228.76.54",
                        "password": "",
                        "motto": "",
                        "update_time": 1689927205,
                        "create_time": 1645876529,
                        "status": "1"
                    }
                }
            };
        },
    },
    {
        url: '/admin/auth.Admin/add',
        method: 'post',
        response: () => {
            return {
                "code": 200,
                "message": "",
                "time": 1689924219
            };
        },
    },
    {
        url: '/admin/auth.Admin/edit',
        method: 'post',
        response: () => {
            return {
                "code": 200,
                "message": "",
                "time": 1689924219
            };
        },
    },
    {
        url: '/admin/auth.Admin/del',
        method: 'delete',
        response: () => {
            return {
                "code": 200,
                "message": "",
                "time": 1689924219
            };
        },
    }
];
