import createAxios from '/@/utils/axios';
import { checkFileMimetype } from '/@/utils/common';
import { getUrl } from '/@/utils/axios';
import { useUserInfo } from '../stores/userInfo';
import { ElNotification, UploadRawFile } from 'element-plus';
import { useSiteConfig } from '/@/stores/siteConfig';
import { state as uploadExpandState, fileUpload as uploadExpand } from '/@/components/mixins/baUpload';
import { AxiosRequestConfig } from 'axios';
import { i18n } from '../lang';

/*
 * 公共请求函数和Url定义
 */

export const uploadUrl = '/ajax/upload';
export const buildSuffixSvgUrl = '/ajax/buildSuffixSvg';
export const areaUrl = '/ajax/area';
export const getTablePkUrl = '/ajax/getTablePk';
export const getTableFieldListUrl = '/ajax/getTableFieldList';
export const clearCacheUrl = '/ajax/clearCache';

export const captchaUrl = '/api/common/captcha';
export const clickCaptchaUrl = '/api/common/clickCaptcha';
export const checkClickCaptchaUrl = '/api/common/checkClickCaptcha';
export const refreshTokenUrl = '/api/common/refreshToken';

/**
 * 上传文件
 */
export function fileUpload(fd: FormData, params: AnyObj = {}, forceLocal = false, config: AxiosRequestConfig = {}): ApiPromise {
    let errorMsg = '';
    const file = fd.get('file') as UploadRawFile;
    const siteConfig = useSiteConfig();

    if (!file.name || typeof file.size == 'undefined') {
        errorMsg = i18n.global.t('utils.The data of the uploaded file is incomplete!');
    } else if (!checkFileMimetype(file.name, file.type)) {
        errorMsg = i18n.global.t('utils.The type of uploaded file is not allowed!');
    } else if (file.size > siteConfig.upload.maxsize) {
        errorMsg = i18n.global.t('utils.The size of the uploaded file exceeds the allowed range!');
    }
    if (errorMsg) {
        return new Promise((resolve, reject) => {
            ElNotification({
                type: 'error',
                message: errorMsg,
            });
            reject(errorMsg);
        });
    }

    if (!forceLocal && uploadExpandState() == 'enable') {
        return uploadExpand(fd, params, config);
    }

    return createAxios({
        url: uploadUrl,
        method: 'POST',
        data: fd,
        params: params,
        timeout: 0,
        ...config,
    });
}

/**
 * 生成文件后缀icon的svg图片
 * @param suffix 后缀名
 * @param background 背景色,如:rgb(255,255,255)
 */
export function buildSuffixSvg(suffix: string, background = '') {
    const userInfo = useUserInfo();
    return (
        getUrl() +
        buildSuffixSvgUrl +
        '?batoken=' +
        userInfo.getToken() +
        '&suffix=' +
        suffix +
        (background ? '&background=' + background : '') +
        '&server=1'
    );
}

/**
 * 获取地区数据
 */
export function getArea(values: number[]) {
    const params: { province?: number; city?: number } = {};
    if (values[0]) {
        params.province = values[0];
    }
    if (values[1]) {
        params.city = values[1];
    }
    return createAxios({
        url: areaUrl,
        method: 'GET',
        params: params,
    });
}

/**
 * 缓存清理接口
 */
export function postClearCache(type: string) {
    return createAxios(
        {
            url: clearCacheUrl,
            method: 'POST',
            data: {
                type: type,
            },
        },
        {
            showSuccessMessage: true,
        }
    );
}

/**
 * 远程下拉框数据获取
 */
export function getSelectData(remoteUrl: string, q: string, params: {}) {
    return createAxios({
        url: remoteUrl,
        method: 'get',
        params: Object.assign(params, {
            select: true,
            quickSearch: q,
        }),
    });
}

export function buildCaptchaUrl() {
    return getUrl() + captchaUrl + '?server=1';
}

export function getCaptchaData(id: string) {
    return createAxios({
        url: clickCaptchaUrl,
        method: 'get',
        params: {
            id,
        },
    });
}

export function checkClickCaptcha(id: string, info: string, unset: boolean) {
    return createAxios(
        {
            url: checkClickCaptchaUrl,
            method: 'post',
            data: {
                id,
                info,
                unset,
            },
        },
        {
            showCodeMessage: false,
        }
    );
}

export function getTablePk(table: string) {
    return createAxios({
        url: getTablePkUrl,
        method: 'get',
        params: {
            table: table,
        },
    });
}

/**
 * 获取数据表的字段
 * @param table 数据表名
 * @param clean 只要干净的字段注释（只要字段标题）
 */
export function getTableFieldList(table: string, clean = true) {
    return createAxios({
        url: getTableFieldListUrl,
        method: 'get',
        params: {
            table: table,
            clean: clean ? 1 : 0,
        },
    });
}

export function refreshToken() {
    const userInfo = useUserInfo();
    return createAxios({
        url: refreshTokenUrl,
        method: 'POST',
        data: {
            refreshToken: userInfo.getToken('refresh'),
        },
    });
}

/**
 * 生成一个控制器的：增、删、改、查、排序的操作url
 */
export class baTableApi {
    private controllerUrl;
    public actionUrl;

    constructor(controllerUrl: string) {
        this.controllerUrl = controllerUrl;
        this.actionUrl = new Map([
            ['index', controllerUrl + 'index'],
            ['add', controllerUrl + 'add'],
            ['edit', controllerUrl + 'edit'],
            ['del', controllerUrl + 'del'],
            ['sortable', controllerUrl + 'sortable'],
        ]);
    }

    index(filter: AnyObj = {}) {
        return createAxios<TableDefaultData>({
            url: this.actionUrl.get('index'),
            method: 'get',
            params: filter,
        });
    }

    edit(params: AnyObj) {
        return createAxios({
            url: this.actionUrl.get('edit'),
            method: 'get',
            params: params,
        });
    }

    del(ids: string[]) {
        return createAxios(
            {
                url: this.actionUrl.get('del'),
                method: 'DELETE',
                params: {
                    ids: ids,
                },
            },
            {
                showSuccessMessage: true,
            }
        );
    }

    postData(action: string, data: AnyObj) {
        return createAxios(
            {
                url: this.actionUrl.has(action) ? this.actionUrl.get(action) : this.controllerUrl + action,
                method: 'post',
                data: data,
            },
            {
                showSuccessMessage: true,
            }
        );
    }

    sortableApi(id: number, targetId: number) {
        return createAxios({
            url: this.actionUrl.get('sortable'),
            method: 'post',
            data: {
                id: id,
                targetId: targetId,
            },
        });
    }
}
