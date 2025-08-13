<template>
  <div class="current-city" role="button" aria-roledescription="Выбор города" @click="openSearchCity">
    <div class="current-city__icon">Icon</div>
    <span class="current-city__city">{{ citiesStore.currentCity?.city }}</span>
  </div>

  <Modal v-if="showModal" :show="showModal" preventClose> <ChangeCity /> </Modal>
</template>
<script setup async>
import { onMounted, ref } from 'vue';
import { useCitiesStore } from '@/entities/cities/model/store';

import { CityModel } from '@/entities//cities/model/model';
import Modal from '@/shared/ui/nl-modal/index.vue';
import ChangeCity from './modal.vue';

const showModal = ref(false);
const citiesStore = useCitiesStore();

async function openSearchCity() {
  showModal.value = true;
}

onMounted(async () => {
  if (!citiesStore.currentCity) {
    const api = new CityModel();
    citiesStore.currentCity = await api.getOne(1);
  }
});
</script>
<style>
.current-city {
  display: flex;
  gap: 8px;
  cursor: pointer;
}
/* .current-city__icon {
} */

.current-city__city {
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  line-height: 24px;
  letter-spacing: 0;
}
</style>
