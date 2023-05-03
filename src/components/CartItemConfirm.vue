<template>
    <li class="cart-order" >
        <h3>{{item.product.title}}</h3>
        <b>{{(item.product.price * item.amount)  | numberFormater}} ₽ </b>
        <span>Артикул: {{item.product.id}}</span>
      </li>

</template>
<script>
  import numberFormater from '@/helpers/numberFromater';
  import { mapGetters } from 'vuex';
export default {
    props: ['item'],
    filters: {
      numberFormater
    },
    computed: {
      ...mapGetters({products: 'cartDetailProducts', totalPrice: 'cartTotalPrice', totalItems: 'cartTotalItems'}),
      amount: {
            get() {
                return this.item.amount;
            },
            set(value) {
                this.$store.commit('updateCartProductAmount', {productId: this.item.productId, amount: value});
            }
        },
    }

}
</script>