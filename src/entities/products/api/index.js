import { BaseApi } from '@/shared/axios/index';

const folder = 'menutags';

export async function getList(id, slug) {
  return await new BaseApi(`${folder}/${slug}`, 'ru').get({ city_id: id });
}
