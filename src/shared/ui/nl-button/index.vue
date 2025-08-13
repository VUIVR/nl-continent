<template>
  <button
    class="button"
    :disabled="disabled"
    @click="!disabled && $emit('click')"
    :class="{ disabled: disabled }"
  >
    <slot />
  </button>
</template>
<script lang="ts" setup>
defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
});

defineEmits(['click']);
</script>
<style scoped>
.button {
  border-radius: 24px;
  height: 40px;
  width: 100%;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: var(--main-white);
  cursor: pointer;
  border: none;
  padding: 5px 20px;
  background: linear-gradient(45deg, var(--button-gradient-dark), var(--button-gradient-light));
  box-shadow: 0px 12px 15px var(--button-shadow);
  position: relative;
  overflow: hidden;
}

.disabled {
  background: transparent;
  box-shadow: none;
  border: 2px solid var(--main-grey);
  color: var(--main-grey);
  cursor: auto;
}
</style>
