import { getCity } from '../api/index';
import { reactive, ref } from 'vue';
import { CreateItemCiry } from './create-item';

export class CityModel {
  loading = reactive({
    list: false,
    one: false,
  });
  list = ref([]);

  /**
   * Получение списка городов
   * @param {string} search - строка для посика по названию города
   * @returns {Promise<CreateItem[]>} - список городов
   */
  async getList(search) {
    this.loading.list = true;
    try {
      const resp = await getCity({ term: search });
      this.list.value = resp.data.data.map((i) => new CreateItemCiry(i));
    } catch (err) {
      // обраьотка ошибки или показывваем тост с ошибкой
    } finally {
      this.loading.list = false;
    }
  }

  /**
   * получение детальной ифномрации о городе
   * @param {number} id - id города
   * @returns {Promise<CreateItem>} - объект с описанием города
   */
  async getOne(id) {
    this.loading.one = true;

    try {
      const resp = await getCity({ id });
      return new CreateItemCiry(resp.data.data);
    } catch (err) {
      // обра,отка ошибки или показывваем тост с ошибкой
    } finally {
      this.loading.one = false;
    }
  }
}
