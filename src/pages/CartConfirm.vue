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
              <a class="breadcrumbs-link" href="cart.html">
                Корзина
              </a>
            </li>
            <li class="breadcrumbs-item">
              <a class="breadcrumbs-link">
                Оформление заказа
              </a>
            </li>
          </ul>
    
          <h1 class="content-title">
            Корзина
          </h1>
          <span class="content-info">
            <span v-if="totalItems >= 1">{{totalItems + ' '}}</span>
              <span v-if="totalItems == 0">Нет товаров</span>
              <span v-if="totalItems == 1">товар</span>
              <span v-if="totalItems > 1 && totalItems < 5">товара</span>
              <span v-if="totalItems >= 5">товаров</span>
          </span>
        </div>
    
        <section class="cart">
          <form class="cart-form form" action="#" method="POST" @submit.prevent="saveFormValue">
            <div class="cart-field">
              <div class="cart-data">

                <BaseFormText title="ФИО" type="text" v-model="formData.name" placeholder="Введите ваше полное имя" :error="formError.name"/>

                <BaseFormText title="Адрес" type="text" v-model="formData.address" placeholder="Введите ваш адрес" :error="formError.address"/>

                <BaseFormText title="Телефон" type="tel" v-model="formData.phone" placeholder="Введите ваш номер телефон" :error="formError.phone"/>

                <BaseFormText title="Email" type="email" v-model="formData.email" placeholder="Введите вашу электронную почту" :error="formError.email"/>

                <BaseFormTextarea title="Комментарий" v-model="formData.comment" placeholder="Ваши пожелания" :error="formError.comment"/>
    
              </div>
    
              <div class="cart-options">
                <h3 class="cart-title">Доставка</h3>
                <ul class="cart-options options" >
                  <li class="options-item">
                    <label class="options-label" >
                      <input class="options-radio sr-only" type="radio" name="delivery" :value="false" v-model="boolRadio" @change="check(boolRadio)">
                      <span class="options-value">
                        Самовывоз <b>бесплатно</b>
                      </span>
                    </label>
                  </li> 
                  <li class="options-item">
                    <label class="options-label">
                      <input class="options-radio sr-only" type="radio" name="delivery" :value="true" v-model="boolRadio" @change="check(boolRadio)">
                      <span class="options-value">
                        Курьером <b>500 ₽</b>
                      </span>
                    </label>
                  </li>
                </ul>
    
                <h3 class="cart-title">Оплата</h3>
                <ul class="cart-options options">
                  <li class="options-item">
                    <label class="options-label">
                      <input class="options-radio sr-only" type="radio" name="pay" value="card">
                      <span class="options-value">
                        Картой при получении
                      </span>
                    </label>
                  </li>
                  <li class="options-item">
                    <label class="options-label">
                      <input class="options-radio sr-only" type="radio" name="pay" value="cash">
                      <span class="options-value">
                        Наличными при получении
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
    
            <div class="cart-block">
              <ul class="cart-orders">
                <CartItemConfirm v-for="item in products" :key="item.productId" :item="item"></CartItemConfirm>
              </ul>
              
              <div class="cart-total">
                <p v-if="totalItems >= 1 && boolRadio == true">Доставка: <b>500 ₽</b></p>
                <p>Итого: 
                <b>
                    <span v-if="totalItems >= 1">{{totalItems + ' '}}</span>
                </b>  
                    <span v-if="totalItems == 0">Нет товаров</span>
                    <span v-if="totalItems == 1">товар</span>
                    <span v-if="totalItems > 1 && totalItems < 5">товара</span>
                    <span v-if="totalItems >= 5">товаров</span>
                     <span v-if="totalItems >= 1"> на сумму 
                     <b v-if="boolRadio == false">{{(totalPrice) | numberFormater}} ₽</b>
                     <b v-if="boolRadio == true">{{(totalPrice += 500) | numberFormater}} ₽</b>
                    </span>    
                    </p>
              </div>
    
              <router-link :tag="button" :to="'/order'" class="cart-button button button-primery" type="submit" @click.prevent="saveFormValue">
                Оформить заказ
              </router-link>
            </div>
            <div class="cart-error form-error-block" v-if="formError.name || formError.lastname || formError.tel || formError.email">
              <h4>Заявка не отправлена!</h4>
              <p>
                Похоже произошла ошибка. Попробуйте отправить снова или перезагрузите страницу.
              </p>
            </div>
          </form>
        </section>
      </main>
</template>
<script>
  import numberFormater from '@/helpers/numberFromater';
  import { mapGetters } from 'vuex';
  import { mapMutations } from 'vuex'
  import CartItemConfirm from '@/components/CartItemConfirm.vue';
  import BaseFormText from '@/components/BaseFormText.vue';
  import BaseFormTextarea from '@/components/BaseFormTextarea.vue';


export default {
    data() {
        return {
            formData: {},
            formError: {},
            boolRadio: false,
        }
    },
    components: { CartItemConfirm, BaseFormText, BaseFormTextarea },
          filters: {
      numberFormater
    },
    computed: {
      ...mapGetters({products: 'cartDetailProducts', totalPrice: 'cartTotalPrice', totalItems: 'cartTotalItems', getRadio: 'radioButtonValue', getForm: 'formStoreState' }),
      checkRadio: {
        get() {
          return this.getRadio;
        }, set (boolRadio) {
          this.$store.commit('setRadioButtonValue', {getRadio: boolRadio})
        },
      },
      
    },
    methods: {
      ...mapMutations({check: 'setRadioButtonValue', }, ['addFormToStore']),
      saveFormValue() {
            this.addFormToStore({data: this.formData})
          }
      // для радио кнопки
  },
    }

</script>






<!-- ИНПУТЫ ДО СИХ ПОР НЕ ПЕРЕДАЮТ ОБЪЕКТ -->