import { getList } from '../api/index';
import { ref } from 'vue';
import { CreateItemListCategory } from './create-item-list-category';

export class CategoryModel {
  loading = ref(false);
  list = ref([]);

  /**
   * Получение списка категорий
   * @param {string} id - строка для поиска по названию города
   */
  async getList(id) {
    this.loading.value = true;
    try {
      const resp = await getList(id);
      this.list.value = resp.data.tags.map((i) => new CreateItemListCategory(i));
    } catch {
      // обработка ошибки или показывваем тост с ошибкой
    } finally {
      this.loading.value = false;
    }
  }
}
