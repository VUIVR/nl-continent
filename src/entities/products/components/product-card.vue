<template>
  <article class="product-card">
    <div class="product-card__img"><img :src="image" :alt="presentName" /></div>
    <div class="product-card__description">
      <div class="product-card__category">{{ categoryName }}</div>
      <div class="product-card__name">{{ presentName }}</div>
      <div class="product-card__comment">{{ commentName }}</div>
      <div class="product-card__price" :aria-label="`Стоимость товара ${price} рублей`">{{ price }} ₽</div>
      <Button :disabled="!allowed && !available" @click="$emit('click')">
        {{ !allowed && !available ? 'Нет в наличии' : 'В корзину' }}
      </Button>
    </div>
  </article>
</template>
<script setup>
import Button from '@/shared/ui/nl-button/index.vue';

defineProps({
  /** изображение */
  image: {
    type: String,
    required: true,
  },
  /** название категории */
  categoryName: {
    type: String,
    required: true,
  },
  /** название продукта */
  presentName: {
    type: String,
    required: true,
  },
  /** текст под названием продукта */
  commentName: {
    type: String,
    required: true,
  },
  /** цена (всегда в рублях) */
  price: {
    type: Number,
    required: true,
  },
  /** если поле false, тогда товара нет в наличии */
  allowed: {
    type: Boolean,
    required: true,
  },
  /** если поле false, тогда товара нет в наличии */
  available: {
    type: Boolean,
    required: true,
  },
});

defineEmits(['click']);
</script>
<style scoped>
.product-card {
  position: relative;
  width: 100%;
  max-width: 276px;
  overflow: hidden;
  background-color: var(--main-white);
  display: flex;
  flex-direction: column;
}

.product-card__description {
  padding: 6px 32px 23px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
}

.product-card__category {
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0;
  color: var(--main-grey);
  margin-bottom: 4px;
  text-align: center;
}

.product-card__name {
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: var(--main-black);
  margin-bottom: 9px;
  text-align: center;
  flex-grow: 1;
}

.product-card__comment {
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0;
  margin-bottom: 14px;
  text-align: center;
}

.product-card__price {
  font-weight: 600;
  font-size: 26px;
  line-height: 24px;
  margin-bottom: 16px;
  text-align: center;
}
</style>
