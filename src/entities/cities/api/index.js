import { BaseApi } from '@/shared/axios/index';

const folder = 'city';

export async function getCity(query) {
  return await new BaseApi(folder, 'ru').get({ country: 'ru', ...query });
}
