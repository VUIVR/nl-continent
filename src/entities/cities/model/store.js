import { ref, watch } from 'vue';
import { defineStore } from 'pinia';
import { useLocalStorage } from '@/shared/lib/localStorage';
import { nameCurrentCityInLocalStorage } from '@/entities/cities/data/index';

export const useCitiesStore = defineStore('city', () => {
  const currentCity = ref();

  watch(
    () => currentCity.value,
    (newValue) => {
      if (newValue) {
        useLocalStorage.setItem(nameCurrentCityInLocalStorage, JSON.stringify(currentCity.value));
      } else {
        const item = useLocalStorage.getItem(nameCurrentCityInLocalStorage);
        if (item) {
          currentCity.value = JSON.parse(item);
        }
      }
    },
    { immediate: true },
  );

  return { currentCity };
});
