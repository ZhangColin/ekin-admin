import createAxios from '/@/utils/axios';

export const url = '/Dashboard/';

export function dashboard() {
    return createAxios({
        url: url + 'dashboard',
        method: 'get',
    });
}
