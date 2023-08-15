<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title product-card">
        {{ title }}
      </p>
    </header>
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          src="https://picsum.photos/1280/960"
          alt="Placeholder image"
        >
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">
            {{ productName }}
          </p>
          <p class="subtitle is-6">
            {{ productPrice }}
          </p>
        </div>
      </div>
      <div class="content">
        {{ arrivalLabel }}
        <br>
        <time datetime="2023-9-1">
          {{ arrivalDate }}
        </time>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">
        {{ submitButtonLabel }}
      </a>
    </footer>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    productName: string
    productPrice: string
    arrivalLabel: string
    arrivalDate: string
    submitButtonLabel: string
    title: string
  }>()
</script>

<style>
  .product-card {
    color: orangered;
  }
</style>
