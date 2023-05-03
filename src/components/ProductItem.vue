<template>
    <div>
      <li class="catalog-item">
        <router-link class="catalog-pic" :to="{name:'product', params: {id: product.id}}">
          <img :src="product.image"  :alt="product.title">
        </router-link>

        <h3 class="catalog-title">
          <a href="#">
            {{product.title}}
          </a>
        </h3>

        <span class="catalog-price">
          {{ product.price | numberFormater}} ₽
        </span>
      </li>
    </div>
</template>
<script>
import gotoPage from '@/helpers/gotoPage';
import numberFormater from '@/helpers/numberFromater';

    export default {
      data() {
        return {
          color: '#73B6EA'
        };
      },
      filters: {
      numberFormater
    },
      methods: {
        gotoPage
      },
    props:['product']
    
}

</script>