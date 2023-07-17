<template>
  <div class="columns is-centered">
    <div class="column is-one-third">
      <ProductCard v-bind="state"/>
    </div>
  </div>
</template>

<script setup>
  const state = reactive({
    productName: 'Bigbank Jacket',
    productPrice: '€50',
    arrivalLabel: 'Estimated arrival on:',
    arrivalDate: 'Friday, 01-09',
    submitButtonLabel: 'Add to bag',
    title: 'Trending product',
  })
</script>
