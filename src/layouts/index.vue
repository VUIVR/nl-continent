<template>
  <div class="layout">
    <header>
      <HeaderComp />
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>
<script setup>
import HeaderComp from '@/widgets/header/index.vue';
</script>
<style scoped>
.layout {
  min-height: 100%;
  height: fit-content;
  min-width: 360px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

header {
  background-color: var(--main-white);
  box-shadow: 0px 2px 4px 0px var(--shadow-white);
  z-index: 1;
  display: flex;
  justify-content: center;
}

main {
  background-color: var(--secondary-white);
  height: 100%;
  display: flex;
  justify-content: center;
  flex-grow: 1;
}
</style>
