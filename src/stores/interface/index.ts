// 变量名对应含义请在 /stores/* 里边找
import { RouteRecordRaw, RouteLocationNormalized } from 'vue-router';

export interface Layout {
    showDrawer: boolean;
    shrink: boolean;
    layoutMode: string;
    mainAnimation: string;
    isDark: boolean;
    menuWidth: number;
    menuDefaultIcon: string;
    menuCollapse: boolean;
    menuUniqueOpened: boolean;
    menuShowTopBar: boolean;
    menuBackground: string[];
    menuColor: string[];
    menuActiveBackground: string[];
    menuActiveColor: string[];
    menuTopBarBackground: string[];
    headerBarTabColor: string[];
    headerBarBackground: string[];
    headerBarHoverBackground: string[];
    headerBarTabActiveBackground: string[];
    headerBarTabActiveColor: string[];
}

export interface NavTabs {
    activeIndex: number;
    activeRoute: RouteLocationNormalized | null;
    tabsView: RouteLocationNormalized[];
    tabFullScreen: boolean;
    tabsViewRoutes: RouteRecordRaw[];
    authNode: Map<string, string[]>;
}


export interface UserInfo {
    id: number;
    username: string;
    nickname: string;
    avatar: string;
    last_login_time: string;
    token: string;
    refresh_token: string;
    super: boolean;
}
export interface TaskItem {
    // 任务唯一标识
    uuid: string;
    // 创建时间
    createTime: string;
    // 状态
    status: number;
    // 命令
    command: string;
    // 命令执行日志
    message: string[];
    // 显示命令执行日志
    showMessage: boolean;
    // 失败阻断后续命令执行
    blockOnFailure: boolean;
    // 扩展信息，自动发送到后台
    extend: string;
    // 执行结果回调
    callback: Function;
}

export interface Menus {
    id: number;
    name: string;
    type: string;
    path: string;
    title: string;
    url: string;
    meta: {
        type: 'tab' | 'link' | 'iframe';
    };
    children: Menus[];
}

export interface SiteConfig {
    siteName: string;
    recordNumber?: string;
    version: string;
    cdnUrl: string;
    apiUrl: string;
    upload: {
        mode: string;
        maxsize: number;
        mimetype: string;
        savename: string;
        url?: string;
        params?: AnyObj;
    };
    headNav: Menus[];
}
