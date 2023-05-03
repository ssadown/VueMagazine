<template>
    <li class="cart-item product">
        <div class="product-pic">
          <img :src="item.product.image" width="120" height="120" :alt="item.product.title">
        </div>
        <h3 class="product-title">
          {{item.product.title}}
        </h3>
        <span class="product-code">
          Артикул: {{item.product.id}}
        </span>

        <div class="product-counter form-counter">
          <button type="button" aria-label="Убрать один товар" @click.prevent="removeProduct(item.productId)">
            <svg width="10" height="10" fill="currentColor">
              <use xlink:href="#icon-minus"></use>
            </svg>
          </button>

          <input type="text" v-model.number="amount" name="count">

          <button type="button" aria-label="Добавить один товар" @click.prevent="addProduct(item.productId)">
            <svg width="10" height="10" fill="currentColor">
              <use xlink:href="#icon-plus"></use>
            </svg>
          </button>
        </div>

        <b class="product-price">
          {{(item.amount * item.product.price) | numberFormater}} ₽
        </b>

        <button class="product-del button-del" type="button" aria-label="Удалить товар из корзины" @click.prevent="deleteProduct(item.productId)">
          <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 5L5 19M5.00001 5L19 19" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
      </li>
</template>

<script>
  import numberFormater from '@/helpers/numberFromater';
  import { mapMutations } from 'vuex';

export default {
    props: ['item'],
    filters: {
      numberFormater
    },
    computed: {
        amount: {
            get() {
                return this.item.amount;
            },
            set(value) {
                this.$store.commit('updateCartProductAmount', {productId: this.item.productId, amount: value});
            }
        },
    },
    methods: {
      ...mapMutations ({deleteProduct: 'deleteCartProduct', addProduct: 'addCartProduct', removeProduct: 'removeCartProduct' }),
    }
}
</script>