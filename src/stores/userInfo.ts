import { defineStore } from 'pinia';
import { USER_INFO } from '/@/stores/constant/cacheKey';
import { UserInfo } from '/@/stores/interface';

export const useUserInfo = defineStore('userInfo', {
    state: (): UserInfo => {
        return {
            id: 0,
            username: '',
            nickname: '',
            avatar: '',
            last_login_time: '',
            token: '',
            refresh_token: '',
            // 是否是超级管理员，用于判定是否显示终端按钮等，不做任何权限判断
            super: false,
        };
    },
    actions: {
        dataFill(state: UserInfo) {
            this.$state = { ...this.$state, ...state };
        },
        removeToken() {
            this.token = '';
            this.refresh_token = '';
        },
        setToken(token: string, type: 'auth' | 'refresh') {
            const field = type == 'auth' ? 'token' : 'refresh_token';
            this[field] = token;
        },
        getToken(type: 'auth' | 'refresh' = 'auth') {
            return type === 'auth' ? this.token : this.refresh_token;
        },
        setSuper(val: boolean) {
            this.super = val;
        },
    },
    persist: {
        key: USER_INFO,
    },
});
