<template>
  <nav class="navbar">
    <div class="navbar-end">
      <div class="navbar-item">
        <button class="button">
          {{ cartLabel }}
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
  const { totalPrice } = storeToRefs(useCartStore())

  const cartLabel = computed(() => totalPrice.value === 0
    ? 'Cart'
    : `Cart (€${totalPrice.value})`)
</script>
