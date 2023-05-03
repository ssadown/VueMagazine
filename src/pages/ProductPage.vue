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
                      <svg width="12" height="12" fill="currentColor">
                        <use xlink:href="#icon-minus"></use>
                      </svg>
                    </button>
    
                    <input type="text" v-model.number="productAmount">
    
                    <button type="button" aria-label="Добавить один товар" @click.prevent="amountUp()">
                      <svg width="12" height="12" fill="currentColor">
                        <use xlink:href="#icon-plus"></use>
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
