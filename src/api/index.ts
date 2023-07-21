import createAxios from '/@/utils/axios';
import { useUserInfo } from '../stores/userInfo';
import { encrypt } from '../utils/crypto';

export const url = '/Index/';

export function index() {
    return createAxios({
        url: url + 'index',
        method: 'get',
    });
}

export function loginSetting() {
    return createAxios({
        url: url + 'login',
        method: 'GET',
    });
}

export function login(params: any) {
    return createAxios({
        url: 'api/system/login',
        data: {
            username: params.username,
            password: encrypt(params.password),
        },
        method: 'POST',
    });
}

export function logout() {
    const userInfo = useUserInfo();
    return createAxios({
        url: url + 'logout',
        method: 'POST',
        data: {
            refreshToken: userInfo.getToken('refresh'),
        },
    });
}
