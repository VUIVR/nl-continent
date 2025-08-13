<template>
  <div class="change-city-modal">
    <h4>Выбор населенного пункта</h4>
    <div class="change-city-modal__input-wrapper">
      <input
        :placeholder="placeholder"
        :disabled="disabled"
        v-model="search"
        @input="searcjCity"
        @focus="focused = true"
        @blur="focused = false"
      />
    </div>
    <button class="change-city-modal__btn">Подтвердить</button>
    ВЫПАДАЮЩИЙ СПИСОК
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useCitiesStore } from '@/entities/cities/model/store';
import { CityModel as Model } from '@/entities/cities/model/model';

const citiesStore = useCitiesStore();
const model = new Model();
const search = ref('');

const placeholder = ref('Например, Санкт-Петербург');
const disabled = ref(false);
const focused = ref(false);

async function searcjCity() {
  if (search.value.length > 2) {
    await model.getList(search.value);
  }
}
</script>
<style scoped>
/* .change-city-modal {
} */

.change-city-modal__input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid var(--border-grey);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.change-city-modal__input-wrapper:hover {
  border-color: var(--main-grey);
}

input {
  width: 100%;
  padding: 12px 15px;
  font-size: 15px;
  border: none;
  outline: none;
  background: transparent;
  border-radius: 8px;
  transition: all 0.3s ease;
}

input:focus {
  box-shadow: 0 0 0 2px rgba(66, 185, 131, 0.2);
}

input::placeholder {
  color: #c0c4cc;
}
</style>
