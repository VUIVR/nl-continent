<template>
  <div class="change-city-modal">
    <h4 class="change-city-modal__title">Выбор населенного пункта</h4>
    <div class="change-city-modal__content">
      <div
        class="change-city-modal__input input-block"
        :class="{ 'input-block_focused': focused && model.list.value.length }"
      >
        <input
          name="city"
          :placeholder="placeholder"
          :disabled="disabled"
          v-model="search"
          autocomplete="off"
          @input="searchCity"
          @blur="focused = false"
          @focus="focused = true"
        />
        <button
          v-if="search"
          class="input-block__clear-btn"
          aria-label="Очистить поиск города"
          @click="clearSearch"
        >
          <XIcon class="input-block__icon" />
        </button>

        <ul class="input-block__list" v-show="model.list.value.length">
          <li class="input-block__item" v-for="item in model.list.value" :key="item.id">
            <button
              @click.self.prevent.stop="changeLocation(item)"
              :aria-label="`Выбрать город ${item.label}`"
            >
              {{ item.label }}
            </button>
          </li>
        </ul>
      </div>
      <Button class="change-city-modal__btn" :disabled="!changedCity" @click="editCurrentCity">
        Подтвердить
      </Button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useCitiesStore } from '@/entities/cities/model/store';
import { CityModel as Model } from '@/entities/cities/model/model';
import Button from '@/shared/ui/nl-button/index.vue';
import XIcon from '@/app/icons/x.vue';

const citiesStore = useCitiesStore();
const model = new Model();
const search = ref('');
const focused = ref(true);
const changedCity = ref();

const placeholder = ref('Например, Санкт-Петербург');
const disabled = ref(false);
const emit = defineEmits(['close']);

async function searchCity() {
  changedCity.value = undefined;
  if (search.value.length > 2) {
    await model.getList(search.value);
  }
}

function changeLocation(item) {
  search.value = item.label;
  focused.value = false;
  searchCity();
  changedCity.value = item;
}

function clearSearch() {
  search.value = '';
  changedCity.value = undefined;
}

function editCurrentCity() {
  citiesStore.currentCity = changedCity.value;
  emit('close');
}
</script>
<style scoped>
.change-city-modal__content {
  display: flex;
  width: 100%;
  gap: 18px;
}

.change-city-modal__title {
  margin: 0;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 12px;
}

.input-block {
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid var(--border-grey-80);
  border-radius: 8px;
  width: 100%;
  position: relative;
}

.input-block:hover {
  border-color: var(--main-black);
}

.input-block_focused {
  border-radius: 8px 8px 0 0;
  border-color: var(--main-black);
}

.input-block input {
  width: 100%;
  padding: 12px 16px;
  font-size: 18px;
  border: none;
  outline: none;
  background: transparent;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.input-block input::placeholder {
  color: #c0c4cc;
}

.input-block__clear-btn {
  border: none;
  background: transparent;
}

.input-block__icon {
  color: var(--main-grey);
  margin-right: 20px;
  cursor: pointer;
}

.input-block__list {
  position: absolute;
  top: 100%;
  width: calc(100% + 1px);
  left: -0.7px;
  right: 0;
  background-color: var(--main-white);
  list-style-type: none;
  border: 1px solid var(--main-black);
  border-top: none;
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding-block: 12px;
  /* border-top: 2px solid var(--main-grey); */
  margin: 0;
  border-radius: 0 0 8px 8px;
}

.input-block__list:before {
  position: absolute;
  top: 0;
  left: 16px;
  right: 16px;
  height: 2px;
  content: '';
  background-color: var(--border-grey-30);
  border-radius: 5px;
}

.input-block__item button {
  cursor: pointer;
  color: var(--main-grey);
  width: 100%;
  height: 100%;
  padding: 0 12px;
  background: none;
  border: none;
  text-align: left;
  font-size: 18px;
  line-height: 24px;
}

.input-block__item:hover button {
  color: var(--main-black);
}

.change-city-modal__btn {
  max-width: 174px;
  height: inherit;
}
</style>
