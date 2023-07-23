import createAxios from '/@/utils/axios';
import { encrypt } from '../utils/crypto';

export function getConfig() {
    return createAxios({
        url: 'api/config',
        method: 'get',
    });
}

export function loginSetting() {
    return createAxios({
        url: '/Index/login',
        method: 'GET',
    });
}

export function login(params: any) {
    return createAxios({
        url: 'api/login',
        data: {
            username: params.username,
            password: encrypt(params.password),
        },
        method: 'POST',
    });
}

export function logout() {
    return createAxios({
        url: 'api/logout',
        method: 'POST',
    });
}
