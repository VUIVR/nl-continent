<template>
  <section class="catalog layout-content">
    <template v-if="!modelProducts.loading.value && !modelCategory.loading.value">
      <div class="title">
        <router-link :to="{ name: 'main' }" class="title__back-btn">icon</router-link>
        <h3 class="title__category">{{ modelCategory.category.value?.name }}</h3>
      </div>
      <div class="catalog__content">
        <div class="subcategories">сабкатегории</div>
        <div class="catalog__list">
          <Card
            v-for="item in modelProducts.list.value"
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
import { useRoute } from 'vue-router';
import { watch } from 'vue';
import Spiner from '@/shared/ui/nl-spiner/index.vue';
import { CategoryModel } from '@/entities/categories/model/model-one';
import { ProductsModel } from '@/entities/products/model/model-list';
import { useCitiesStore } from '@/entities/cities/model/store';
import Card from '@/entities/products/components/product-card.vue';

const modelCategory = new CategoryModel();
const modelProducts = new ProductsModel();
const citiesStore = useCitiesStore();
const route = useRoute();

watch(
  () => citiesStore.currentCity,
  (city) => {
    if (!city) return;

    Promise.all([
      modelCategory.getOne(city.id, route.params.category),
      modelProducts.getList(city.id, route.params.category),
    ]);
  },
  {
    immediate: true,
  },
);

function addToCart(item) {
  alert(`${item.presentName}  добавлен в корзину`);
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
}
</style>
