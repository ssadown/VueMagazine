<template>
    <ul class="catalog-list">
            <ProductItem v-for="product in products" :key="product.id" :product="product" ></ProductItem>
      </ul>
</template>
<script>
import ProductItem from './ProductItem.vue'
export default {
    components: {
    ProductItem: ProductItem,
  },
    props:['products']
}

</script>