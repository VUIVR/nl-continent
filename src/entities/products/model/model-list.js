import { getList } from '../api/index';
import { ref } from 'vue';
import { CreateItemProduct } from './create-product';

export class ProductsModel {
  loading = ref(false);
  list = ref([]);

  /**
   * Получение списка продуктов
   * @param {string} id - строка для поиска по idгорода
   * @param {string} slug - строка для поиска по слагу категории
   */
  async getList(id, slug) {
    this.loading.value = true;
    try {
      const resp = await getList(id, slug);
      this.list.value = resp.data.products.map((i) => new CreateItemProduct(i));
    } catch {
      // обработка ошибки или показывваем тост с ошибкой
    } finally {
      this.loading.value = false;
    }
  }
}
