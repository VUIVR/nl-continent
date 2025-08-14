<template>
  <teleport to="body">
    <transition name="modal-fade">
      <div v-show="show" class="modal__overlay" @click.self="handleOverlayClick">
        <div class="modal__container">
          <button class="modal__close-btn" @click="closeModal" aria-label="Закрыть модальное окно">×</button>
          <div class="modal__body">
            <slot></slot>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { watch } from 'vue';

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  preventClose: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['close']);

// Обработчики закрытия
const closeModal = () => {
  emit('close');
};

const handleOverlayClick = () => {
  if (!props.preventClose) {
    closeModal();
  }
};

// Блокировка прокрутки body при открытой модалке
watch(
  () => props.show,
  (isOpen) => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  },
);
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal__overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal__container {
  background: white;
  border-radius: 5px;
  width: 90%;
  max-width: 769px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  padding: 28px 19px 32px;
  position: relative;
}

.modal__close-btn {
  position: absolute;
  top: 18px;
  right: 18px;
  font-size: 28px;
  line-height: 1;
  background: none;
  border: none;
  cursor: pointer;
  color: #777;
  transition: color 0.2s;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal__close-btn:hover {
  color: #333;
  background-color: #f5f5f5;
  border-radius: 50%;
}

.modal__body {
  flex-grow: 1;
}

@media (max-width: 576px) {
  .modal__container {
    width: 95%;
    max-height: 85vh;
  }

  .modal__header,
  .modal__body,
  .modal__footer {
    padding: 15px;
  }
}
</style>
