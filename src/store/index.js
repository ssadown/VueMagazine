import Vue from "vue";
import Vuex from "vuex";
import products from "@/data/products";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cartProducts: [
            
        ],
        // для радио кнопки в корзине
        radioButtonValue: false,
        formStore: [
            
        ]
    },
    mutations: {
        addProductToCart(state, {productId, amount}) {
            const item =state.cartProducts.find(item => item.productId === productId);
            if(item) {
                item.amount += amount;
            }else {
                state.cartProducts.push ({
                    productId,
                    amount,
                });
            }
        },
        // для инпутов
        addFormToStore(state, data) {
            state.formStore.push({data})
        },
        // для радио кнопки в корзине
        setRadioButtonValue(state, value) {
            state.radioButtonValue = value
          },
        //   
        updateCartProductAmount(state, {productId, amount}) {
            const item =state.cartProducts.find(item => item.productId === productId);
            if(item) {
                item.amount = amount;
            }
        },
        deleteCartProduct (state, productId) {
            state.cartProducts = state.cartProducts.filter(item => item.productId !== productId)
        }, 
        addCartProduct (state, productId) {
            const item = state.cartProducts.find(item => item.productId === productId);
            if (item) {
                item.amount += 1;
            }
        },
        removeCartProduct (state, productId) {
            const item = state.cartProducts.find(item => item.productId === productId);
            if (item) {
                item.amount -= 1;
            }
            if (item.amount === 0) {
                state.cartProducts = state.cartProducts.filter(item => item.productId !== productId)
            }
        },
    },
    getters: {
        cartDetailProducts (state) {
            return state.cartProducts.map(item => {
                return {
                    ...item,
                    product: products.find (p => p.id === item.productId)
                }
            });
        },
        cartTotalPrice(state, getters) {
            return getters.cartDetailProducts.reduce((acc, item) => (item.product.price * item.amount) + acc, 0);
        },
        cartTotalItems (state) {
            return state.cartProducts.length;
        },
        radioButtonValue(state) {
            return state.radioButtonValue
        },
        formStoreState(state) {
            return state.formStore
        }
    },
});