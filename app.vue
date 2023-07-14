<template>
  <div class="columns is-centered">
    <div class="column is-one-third">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title product-card">
            {{ state.title }}
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
                {{ state.productName }}
              </p>
              <p class="subtitle is-6">
                {{ state.productPrice }}
              </p>
            </div>
          </div>
          <div class="content">
            {{ state.arrivalLabel }}
            <br>
            <time datetime="2023-9-1">
              {{ state.arrivalDate }}
            </time>
          </div>
        </div>
        <footer class="card-footer">
          <a href="#" class="card-footer-item">
            {{ state.submitButtonLabel }}
          </a>
        </footer>
      </div>
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

<style>
  @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";

  .product-card {
    color: orangered;
  }
</style>
