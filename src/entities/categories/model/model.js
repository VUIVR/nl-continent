import { getList } from '../api/index';
import { ref } from 'vue';
import { CreateItemCategory } from './create-item';

export class CategoryModel {
  loading = ref(false);
  list = ref([]);

  /**
   * Получение списка городов
   * @param {string} search - строка для посика по названию города
   * @returns {Promise<CreateItem[]>} - список городов
   */
  async getList(id) {
    this.loading.value = true;
    try {
      const resp = await getList(id);
      this.list.value = resp.data.tags.map((i) => new CreateItemCategory(i));
    } catch (err) {
      // обраьотка ошибки или показывваем тост с ошибкой
    } finally {
      this.loading.value = false;
    }
  }
}
