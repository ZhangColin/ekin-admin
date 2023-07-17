import request from '@/config/axios';
import type { UserLoginType, UserLoginResponseType, UserType } from './types';

import { encrypt } from '@/utils/crypto';

interface RoleParams {
  roleName: string;
}

export const loginApi = (
  data: UserLoginType,
): Promise<UserLoginResponseType> => {
  return request.post({
    url: '/api/system/login',
    data: { username: data.username, password: encrypt(data.password) },
  });
};

export const loginOutApi = (): Promise<IResponse> => {
  return request.get({ url: '/user/loginOut' });
};

export const getUserInfoApi = (): Promise<UserType> => {
  return request.get({ url: '/api/system/user/info' });
};

export const getUserListApi = ({ params }: AxiosConfig) => {
  return request.get<{
    code: string;
    data: {
      list: UserType[];
      total: number;
    };
  }>({ url: '/user/list', params });
};

export const getAdminRoleApi = (
  params: RoleParams,
): Promise<IResponse<AppCustomRouteRecordRaw[]>> => {
  return request.get({ url: '/role/list', params });
};

export const getTestRoleApi = (
  params: RoleParams,
): Promise<IResponse<string[]>> => {
  return request.get({ url: '/role/list', params });
};
