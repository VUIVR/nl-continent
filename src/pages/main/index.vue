<template>
  <section class="categories layout-content">
    <h3 class="categories__title">Категории товаров</h3>
    <div class="categories__list" v-if="!model.loading.value">
      <CategoryCard v-for="item in model.list.value" :key="item.slug" v-bind="item" />
    </div>
    <Spiner v-else class="categories__spiner" />
  </section>
</template>
<script setup>
import { watch } from 'vue';
import { useCitiesStore } from '@/entities/cities/model/store';
import { CategoryModel } from '@/entities/categories/model/model-list';
import Spiner from '@/shared/ui/nl-spiner/index.vue';
import CategoryCard from '@/entities/categories/components/category-card.vue';

const model = new CategoryModel();
const citiesStore = useCitiesStore();

watch(
  () => citiesStore.currentCity,
  (newValue) => {
    if (!newValue) return;
    model.getList(newValue.id);
  },
  {
    immediate: true,
  },
);
</script>

<style scoped>
.categories {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  padding-block: 35px;
}

.categories__title {
  margin: 0;
  font-weight: 600;
  font-size: 44px;
  line-height: 44px;
}

.categories__list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 22px;
}

.categories__spiner {
  margin: auto;
}
</style>
