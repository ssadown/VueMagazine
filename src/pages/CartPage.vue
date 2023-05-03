<template>
    <main class="content container">
        <div class="content-top">
          <ul class="breadcrumbs">
            <li class="breadcrumbs-item">
              <a class="breadcrumbs-link" href="index.html">
                Каталог
              </a>
            </li>
            <li class="breadcrumbs-item">
              <a class="breadcrumbs-link">
                Корзина
              </a>
            </li>
          </ul>
    
          <h1 class="content-title">
            Корзина
          </h1>
          <span class="content-info">
            <span v-if="totalItems >= 1"> {{ totalItems }} </span> 
            <span v-if="totalItems === 0">Нет товаров</span>
            <span v-if="totalItems === 1">товар</span>
            <span v-if="totalItems > 1 && totalItems < 5">товара</span>
            <span v-if="totalItems >= 5">товаров</span>
          </span>
        </div>
    
        <section class="cart">
          <form class="cart-form form" action="#" method="POST">
            <div class="cart-field">
              <ul class="cart-list">
                <CartItem v-for="item in products" :key="item.productId" :item="item"></CartItem>
              </ul>
            </div>
    
            <div class="cart-block">
              <p class="cart-desc">
                Мы&nbsp;посчитаем стоимость доставки на&nbsp;следующем этапе
              </p>
              <p class="cart-price">
                Итого: <span>{{totalPrice | numberFormater}} ₽</span>
              </p>
    
              <router-link :to="{name: 'confirm'}" tag="button" class="cart-button button button-primery" type="submit">
                Оформить заказ
              </router-link>
            </div>
          </form>
        </section>
      </main>
</template>
<script>
  import numberFormater from '@/helpers/numberFromater';
  import { mapGetters } from 'vuex';
  import CartItem from '@/components/CartItem.vue';


    export default {
      components: { CartItem },
      filters: {
      numberFormater
    },
    computed: {
      ...mapGetters({products: 'cartDetailProducts', totalPrice: 'cartTotalPrice', totalItems: 'cartTotalItems'}),
    }
    }

</script>
