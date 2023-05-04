<template>
    <main class="content container">
        <div class="content-top">
          <ul class="breadcrumbs">
            <li class="breadcrumbs-item">
              <router-link class="breadcrumbs-link" :to="{name: 'main'}">
                Каталог
              </router-link>
            </li>
            <li class="breadcrumbs-item">
              <router-link class="breadcrumbs-link" :to="{name: 'main'}">
                {{ categories.title }}
              </router-link>
            </li>
            <li class="breadcrumbs-item">
              <a class="breadcrumbs-link">
                {{ product.title }}
              </a>
            </li>
          </ul>
        </div>
    
        <section class="item">
          <div class="item-pics pics">
            <div class="pics-wrapper">
              <img width="570" height="570" :src="product.image" :alt="product.title">
            </div>
          </div>
    
          <div class="item-info">
            <span class="item-code">Артикул: {{product.id}}</span>
            <h2 class="item-title">
              {{product.title}}
            </h2>
            <div class="item-form">
              <form class="form" action="#" method="POST" @submit.prevent="addToCart">
                <b class="item-price">
                  {{product.price | numberFormater}} ₽
                </b>

                <div class="item-row">
                  <div class="form-counter">
                    <button type="button" aria-label="Убрать один товар" @click.prevent="amountDown()">
                      <svg width="12px" height="12px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

                        <line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="4" x2="20" y1="12" y2="12"/>
 
                        </svg>
                    </button>
    
                    <input type="text" v-model.number="productAmount">
    
                    <button type="button" aria-label="Добавить один товар" @click.prevent="amountUp()">
                      <svg width="12px" height="12px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
                        <path fill="#000000" fill-rule="evenodd" d="M9 17a1 1 0 102 0v-6h6a1 1 0 100-2h-6V3a1 1 0 10-2 0v6H3a1 1 0 000 2h6v6z"/>
                      </svg>
                    </button>
                  </div>
    
                  <button class="button button-primery" type="submit">
                    В корзину
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
</template>

<script>
import products from '@/data/products';
import categories from '@/data/categories';
import gotoPage from '@/helpers/gotoPage';
import numberFormater from '@/helpers/numberFromater';

export default {
  
    data() {
      return {
        productAmount: 1
      }
    },
    filters: {
      numberFormater
    },
    computed: {
      product() {
      return products.find(product => product.id === +this.$route.params.id);
    },
    categories() {
      return categories.find(category => category.id === this.product.categoryId);
    }
  },
  methods: {
    amountUp() {
      return this.productAmount += 1;
    },
    amountDown() {
      return this.productAmount -= 1;
    },
    gotoPage,
    addToCart() {
      this.$store.commit(
        'addProductToCart',
        {productId: this.product.id, amount: this.productAmount},
      );
    },
  }
}
</script>
