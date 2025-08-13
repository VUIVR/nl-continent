import { getList } from '../api/index';
import { ref } from 'vue';
import { CreateItemOneCategory } from './create-item-one-category';

export class CategoryModel {
  loading = ref(false);
  category = ref();

  /**
   * Получение информации о категории
   * @param {string} id - id города
   * @param {string} slug - Слаг категории
   */
  async getOne(id, slug) {
    this.loading.value = true;
    try {
      const resp = await getList(id, slug);
      const category = resp.data.tags.find((i) => i.slug === slug);
      this.category.value = new CreateItemOneCategory(category);
    } catch {
      // Handle error or display an error toast
    } finally {
      this.loading.value = false;
    }
  }
}
