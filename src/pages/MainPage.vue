<template>
    <main class="content container">
        <div class="content-top content-top--catalog">
          <h1 class="content-title">
            Каталог
          </h1>
          <span class="content-info">
            {{ filteredProducts.length }} 
            <span v-if="filteredProducts.length === 0">Нет товаров</span>
            <span v-if="filteredProducts.length === 1">товар</span>
            <span v-if="filteredProducts.length > 1 && filteredProducts.length < 5">товара</span>
            <span v-if="filteredProducts.length >= 5">товаров</span>
          </span>
        </div>
    
        <div class="content-catalog">
          <ProductFilter :category-id.sync="filterCategoryId" :price-from.sync="filterPriceFrom" :price-to.sync="filterPriceTo" :color-id.sync="filterColorId"/>
          <section class="catalog">
      
            <ProductList :products="products"></ProductList>
        
            <BasePagination v-model="page" :per-page="productsPerPage" :count="countProducts" ></BasePagination>
          </section>
        </div>
      </main>
    
</template>
<script>
import products from '@/data/products'
import ProductList from '@/components/ProductList.vue'
import BasePagination from '@/components/BasePagination.vue'
import ProductFilter from '@/components/ProductFilter.vue'
export default {
  components: {
    ProductList: ProductList,
    BasePagination: BasePagination,
    ProductFilter: ProductFilter,
  },
    data () {
      return {
        filterPriceFrom : 0,
        filterPriceTo: 0,
        filterCategoryId: 0,
        filterColorId: 0,
        page: 1,
        productsPerPage: 3,
      }
    },
    computed: {
      filteredProducts() {
        let filteredProducts = products;

        if(this.filterPriceFrom > 0) {
          filteredProducts = filteredProducts.filter( product => product.price > this.filterPriceFrom)
        }

        if(this.filterPriceTo > 0) {
          filteredProducts = filteredProducts.filter( product => product.price < this.filterPriceTo)
        }

        if(this.filterCategoryId > 0) {
          filteredProducts = filteredProducts.filter( product => product.categoryId === this.filterCategoryId)
        }

        if(this.filterColorId > 0) {
          filteredProducts = filteredProducts.filter( product => product.colorId === this.filterColorId)
        }

        return filteredProducts;
      },
      products() {
        const offset = (this.page - 1) * this.productsPerPage;
        return this.filteredProducts.slice(offset, offset + this.productsPerPage);
      },
      countProducts() {
        return this.filteredProducts.length;
      }
    },
}
</script>
