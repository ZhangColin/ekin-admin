export default [
    {
        url: '/Index/login',
        method: 'post',
        response: () => {
            return {
                code: 1,
                msg: '登录成功！',
                time: 1689600624,
                data: {
                    userInfo: {
                        id: 1,
                        username: 'admin',
                        nickname: 'Admin',
                        avatar: 'https://demo.buildadmin.com/static/images/avatar.png',
                        last_login_time: '2023-07-17 21:30:24',
                        token: '5fe78d04-c686-4500-886c-473aaa4080c3',
                        refresh_token: '',
                    },
                    routePath: '/',
                },
            }
        },
    },
    {
        url: '/Index/login',
        method: 'get',
        response: () => {
            return { code: 1, msg: '', time: 1689645983, data: { captcha: false } }
        },
    },
    {
        url: '/Index/logout',
        method: 'post',
        response: () => {
            return { code: 1, msg: '', time: 1689645983 }
        },
    },
]
