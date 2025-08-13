import { BaseApi } from '@/shared/axios/index';

const folder = 'menutags';

export async function getList(id) {
  return await new BaseApi(folder, 'ru').get({ city_id: id });
}
