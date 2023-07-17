export const useCartStore = defineStore('cart', {
  state: () => ({
    products: [] as ProductCount[]
  }),
  getters: {
    totalPrice: (state) => state.products
      .reduce((n, p) => n + p.price * p.count, 0)
  },
  actions: {
    addProduct(product: Product) {
      const index = this.products
        .findIndex(i => i.id === product.id)

      if (index !== -1) {
        const previous = this.products[index]

        this.products.splice(index, 1, {
          ...previous,
          count: previous.count + 1
        })
      } else {
        this.products.push({
          id: product.id,
          price: product.price,
          count: 1
        })
      }
    }
  }
})
