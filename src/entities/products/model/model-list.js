import { getList } from '../api/index';
import { ref, computed, reactive } from 'vue';
import { CreateItemProduct } from './create-product';

export class ProductsModel {
  loading = ref(false);
  list = ref([]);
  filter = reactive({
    subcategory: null,
  });

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

  filetredProducts = computed(() => {
    if (!this.filter.subcategory) return this.list.value;
    return this.list.value.filter((i) => i.tags.some((i) => i.slug === this.filter.subcategory));
  });
}
