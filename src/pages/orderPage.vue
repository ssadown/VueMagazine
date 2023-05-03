<template>
    <main class="content container">
        <div class="content-top">
          <ul class="breadcrumbs">
            <li class="breadcrumbs-item">
              <router-link class="breadcrumbs-link" :to="'/main'">
                Каталог
              </router-link>
            </li>
            <li class="breadcrumbs-item">
              <router-link class="breadcrumbs-link" :to="'/cart'">
                Корзина
              </router-link>
            </li>
            <li class="breadcrumbs-item">
              <router-link class="breadcrumbs-link" :to="'/confirm'">
                Оформление заказа
              </router-link>
            </li>
          </ul>
    
          <h1 class="content-title">
            Заказ оформлен <span>№111111</span>
          </h1>
        </div>
    
        <section class="cart">
          <form class="cart-form form" action="#" method="POST">
            <div class="cart-field">
    
              <ul class="dictionary">
                <li class="dictionary-item">
                  <span class="dictionary-key">
                    Получатель - {{ formStore.name }}
                  </span>
                  <span class="dictionary-value">
                    Макеева Светлана Андреевна
                  </span>
                </li>
                <li class="dictionary-item">
                  <span class="dictionary-key">
                    Адрес доставки -
                  </span>
                  <span class="dictionary-value">
                    Москва, ул. Комсомольская улица, 6, кв. 20
                  </span>
                </li>
                <li class="dictionary-item">
                  <span class="dictionary-key">
                    Телефон -
                  </span>
                  <span class="dictionary-value">
                    +7 (999)-99-99-99
                  </span>
                </li>
                <li class="dictionary-item">
                  <span class="dictionary-key">
                    Email -
                  </span>
                  <span class="dictionary-value">
                    example@gmail.ru
                  </span>
                </li>
                <li class="dictionary-item">
                  <span class="dictionary-key">
                    Способ оплаты -
                  </span>
                  <span class="dictionary-value">
                    картой при получении
                  </span>
                </li>
              </ul>
            </div>
    
            <div class="cart-block">
              <ul class="cart-orders">
                    <orderItemsPage v-for="item in products" :key="item.productId" :item="item"/>
              </ul>
              
              <div class="cart-total">
                <p v-if="check == true">Доставка: <b>500 ₽</b></p>
                <p>Итого: <b>{{totalItems}} </b>
                    <span v-if="totalItems === 0">Нет товаров</span>
                    <span v-if="totalItems === 1">товар</span>
                    <span v-if="totalItems > 1 && totalItems < 5">товара</span>
                    <span v-if="totalItems >= 5">товаров</span>
                     на сумму <b v-if="check === true">{{totalPrice + 500| numberFormater}} ₽</b>
                     <b v-if="check === false">{{totalPrice| numberFormater}} ₽</b></p>
              </div>
            </div>
          </form>
        </section>
      </main>
</template>

<script>
  import numberFormater from '@/helpers/numberFromater';
  import { mapGetters } from 'vuex';
  import orderItemsPage from '@/components/orderItemsPage.vue';
    export default {
        components: {orderItemsPage},
        filters: {
      numberFormater
    },
    computed: {
      ...mapGetters({products: 'cartDetailProducts', totalPrice: 'cartTotalPrice', totalItems: 'cartTotalItems', check: 'radioButtonValue', formStore: 'formStoreState'}),
    },
    isChecked() {
      return this.check;
    },
    isFormActive() {
      return this.formStore
    }

    }
</script>