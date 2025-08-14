<template>
  <section class="catalog layout-content">
    <template v-if="!modelProducts.loading.value && !modelCategory.loading.value">
      <div class="title">
        <router-link :to="{ name: 'main' }" class="title__back-btn">
          <ArrowSvg />
        </router-link>
        <h3 class="title__category">{{ modelCategory.category.value?.name }}</h3>
      </div>
      <div class="catalog__content">
        <ul class="subcategories" v-if="modelCategory.category.value?.childrens.length > 2">
          <li
            class="subcategories__item"
            :class="{ subcategories__item_active: !modelProducts.filter.subcategory }"
          >
            <button
              class="subcategories__btn"
              :aria-label="`Показать все продукты в категории ${modelCategory.category.value?.name}`"
              @click="changeCategory()"
            >
              Все продукты
            </button>
          </li>
          <li
            v-for="item in modelCategory.category.value?.childrens"
            :key="item.slug"
            class="subcategories__item"
            :class="{ subcategories__item_active: modelProducts.filter.subcategory === item.slug }"
          >
            <button
              class="subcategories__btn"
              @click="changeCategory(item.slug)"
              :aria-label="`Показать продукты в подкатегории ${modelCategory.category.value?.name}`"
            >
              {{ item.name }}
            </button>
          </li>
        </ul>
        <div class="catalog__list">
          <Card
            v-for="item in modelProducts.filetredProducts.value"
            :key="item.id"
            v-bind="item"
            @click="addToCart(item)"
          />
        </div>
      </div>
    </template>
    <Spiner v-else class="catalog__spiner" />
  </section>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router';
import { watch } from 'vue';
import Spiner from '@/shared/ui/nl-spiner/index.vue';
import { CategoryModel } from '@/entities/categories/model/model-one';
import { ProductsModel } from '@/entities/products/model/model-list';
import { useCitiesStore } from '@/entities/cities/model/store';
import Card from '@/entities/products/components/product-card.vue';
import ArrowSvg from '@/app/icons/arrow-left.vue';

const modelCategory = new CategoryModel();
const modelProducts = new ProductsModel();
const citiesStore = useCitiesStore();
const route = useRoute();
const router = useRouter();

watch(
  () => citiesStore.currentCity,
  (city) => {
    if (!city) return;

    Promise.all([
      modelCategory.getOne(city.id, route.params.category),
      modelProducts.getList(city.id, route.params.category),
    ]).then(() => {
      changeCategory(route.params?.subcategory);
    });
  },
  {
    immediate: true,
  },
);

function addToCart(item) {
  alert(`${item.presentName}  добавлен в корзину`);
}

function changeCategory(subCategorySlug = null) {
  modelProducts.filter.subcategory = subCategorySlug;
  editUrl(subCategorySlug);
}

function editUrl(subCategorySlug) {
  if (subCategorySlug) {
    router.push({
      name: 'subcategory',
      params: { category: route.params.category, subcategory: subCategorySlug },
    });
  } else {
    router.push({ name: 'category', params: { category: route.params.category } });
  }
}
</script>
<style scoped>
.catalog {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  padding-block: 35px;
}

.catalog__content {
  display: flex;
  gap: 34px;
}

.catalog__list {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

.catalog__spiner {
  margin: auto;
}

.title {
  display: flex;
  align-items: center;
  gap: 10px;
}

.title__back-btn {
  height: 30px;
  width: 30px;
  min-width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--black);
  border-radius: 50%;
  color: var(--main-white);
  padding: 10px 8px;
}

.title__category {
  margin: 0;
  font-weight: 600;
  font-size: 44px;
  line-height: 44px;
  letter-spacing: 0;
  color: var(--main-black);
}

.subcategories {
  width: 240px;
  min-width: 240px;
  margin: 0;
  padding: 0;
}

.subcategories__item {
  height: 40px;
  color: var(--main-blue-dark);
  list-style-type: none;
  border-bottom: 1px solid var(--pale-blue);
}

.subcategories__item_active {
  border-bottom: none;
  background-color: var(--pale-blue);
  color: var(--blue-100);
}

.subcategories__btn {
  padding: 0;
  border: none;
  width: 100%;
  height: 100%;
  padding: 8px 12px;
  background-color: transparent;
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0;
  color: var(--main-black);
  text-align: left;
}
</style>
