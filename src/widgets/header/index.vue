<template>
  <div class="header layout-content">
    <CurrentCity />
  </div>
</template>
<script setup>
import CurrentCity from '@/features/currentCity/index.vue';
</script>
<style scoped>
.header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 72px;
}
</style>
