<template>
  <nav class="navbar">
    <div class="navbar-end">
      <div class="navbar-item">
        <button class="button mr-2">
          {{ cartLabel }}
        </button>
        <button
          v-for="locale in availableLocales"
          class="button"
          @click="setLocale(locale.code)"
        >
          {{ locale.name }}
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
  const { locale, locales, setLocale } = useI18n()
  const { totalPrice } = storeToRefs(useCartStore())

  const availableLocales = computed(() => locales.value
    .filter(i => i.code !== locale.value))

  const cartLabel = computed(() => totalPrice.value === 0
    ? 'Cart'
    : `Cart (€${totalPrice.value})`)
</script>
