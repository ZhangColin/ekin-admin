import createAxios from '/@/utils/axios'

export function getMenus() {
    return createAxios({
        url: '/system/menu/index',
        method: 'get',
    })
}
