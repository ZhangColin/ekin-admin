export default [
    {
        url: '/admin/auth.Group/index',
        method: 'get',
        response: () => {
            return {
                "code": 200,
                "message": "",
                "timestamp": 1689905706,
                "data": {
                    "list": [
                        {
                            "id": 1,
                            "pid": 0,
                            "name": "超级管理组",
                            "rules": "超级管理员",
                            "create_time": 1645876529,
                            "update_time": 1647805864,
                            "status": "1",
                            "children": [
                                {
                                    "id": 2,
                                    "pid": 1,
                                    "name": "一级管理员",
                                    "rules": "控制台等 58 项",
                                    "create_time": 1645876529,
                                    "update_time": 1658197123,
                                    "status": "1",
                                    "children": [
                                        {
                                            "id": 3,
                                            "pid": 2,
                                            "name": "二级管理员",
                                            "rules": "会员管理等 23 项",
                                            "create_time": 1645876529,
                                            "update_time": 1658197143,
                                            "status": "1",
                                            "children": [
                                                {
                                                    "id": 4,
                                                    "pid": 3,
                                                    "name": "三级管理员",
                                                    "rules": "数据安全管理等 21 项",
                                                    "create_time": 1645876529,
                                                    "update_time": 1658197162,
                                                    "status": "1"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "group": [
                        1
                    ],
                    "remark": ""
                }
            };
        },
    },
    {
        url: '/admin/auth.Group/edit',
        method: 'get',
        response: () => {
            return {
                "code": 200,
                "message": "",
                "time": 1689927153,
                "data": {
                    "row": {
                        "id": 2,
                        "pid": 1,
                        "name": "一级管理员",
                        "rules": [
                            "1",
                            "23",
                            "24",
                            "25",
                            "26",
                            "28",
                            "29",
                            "30",
                            "31",
                            "33",
                            "34",
                            "35",
                            "36",
                            "37",
                            "39",
                            "40",
                            "42",
                            "43",
                            "46",
                            "47",
                            "77",
                            "49",
                            "50",
                            "51",
                            "53",
                            "54",
                            "57",
                            "58",
                            "59",
                            "60",
                            "62",
                            "63",
                            "64",
                            "65",
                            "67",
                            "68",
                            "69",
                            "70",
                            "72",
                            "73",
                            "74",
                            "75",
                            "76"
                        ],
                        "create_time": 1645876529,
                        "update_time": 1658197123,
                        "status": "1"
                    }
                }
            };
        },
    },
    {
        url: '/admin/auth.Group/add',
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
        url: '/admin/auth.Group/edit',
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
        url: '/admin/auth.Group/del',
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
