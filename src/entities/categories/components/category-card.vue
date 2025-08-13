<template>
  <article class="category-card" :style="{ 'background-color': textColor }">
    <router-link
      :to="{ name: 'category', params: { category: slug } }"
      :aria-label="`Перейти к товарам категории ${name}`"
    >
      <div class="category-card__name">{{ name }}</div>
      <div class="category-card__img"><img :src="image" :alt="name" /></div>
    </router-link>
  </article>
</template>
<script setup>
defineProps({
  /**название категории */
  name: {
    type: String,
    required: true,
  },
  /* цвет текста категории */
  textColor: {
    type: String,
    required: true,
  },
  /** изображение  */
  image: {
    type: String,
    required: true,
  },
  /** уникальный тег */
  slug: {
    type: String,
    required: true,
  },
});
</script>
<style scoped>
.category-card {
  position: relative;
  width: 100%;
  max-width: 271px;
  height: 152px;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  padding: 20px;
}

.category-card__name {
  position: relative;
  z-index: 1;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0;
  color: var(--main-white);
}

.category-card__img {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
}

.category-card__img img {
  width: auto;
}
</style>
