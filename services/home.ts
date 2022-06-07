import request from '../utils/request';
import type { UserInfoType } from './data';

export async function getUserInfo(): Promise<{
  errcode: number;
  data: UserInfoType;
}> {
  return request.get('http://rap2api.taobao.org/app/mock/230933/user/info');
}
