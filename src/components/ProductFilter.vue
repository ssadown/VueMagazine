<template>
    <aside class="filter">
        <h2 class="filter-title">Фильтры</h2>
        <form class="filter-form form" action="#" method="get" @submit.prevent="submit">
          <fieldset class="form-block">
            <legend class="form-legend">Цена</legend>
            <label class="form-label form-label-price">
              <input class="form-input" type="text" name="min-price" v-model.number="currentPriceFrom">
              <span class="form-value">От</span>
            </label>
            <label class="form-label form-label-price">
              <input class="form-input" type="text" name="max-price" v-model.number="currentPriceTo">
              <span class="form-value">До</span>
            </label>
          </fieldset>

          <fieldset class="form-block">
            <legend class="form-legend">Категория</legend>
            <label class="form-label form-label--select">
              <select class="form-select" type="text" name="category" v-model.number="currentCategoryId">
                <option value="0">Все категории</option>
                <option :value="category.id" v-for="category in categories" :key="category.id">{{category.title}}</option>
              </select>
            </label>
          </fieldset>

          <fieldset class="form-block">
            <legend class="form-legend">Цвет</legend>
            <ul class="colors">
              <li class="colors-item" v-for="color in colors" :key="color.id">
                <label class="colors-label">
                  <input class="colors-radio sr-only" type="radio" name="color" v-model.number="currentColorId" :value="color.id">
                  <span class="colors-value" :style="color.color">
                  </span>
                </label>
              </li>
            </ul>
          </fieldset>

          
          <button class="filter-submit button button-primery" type="submit">
            Применить
          </button>
          <button class="filter-reset button button-second" type="button" @click="reset">
            Сбросить
          </button>
        </form>
      </aside>
</template>

<script>
import categories from '../data/categories';
import colors from '../data/colors';
export default {
  data() {
    return {
      currentPriceFrom: 0,
      currentPriceTo: 0,
      currentCategoryId: 0,
      currentColorId: 0,
    }
  },
  props: ['priceFrom', 'priceTo', 'categoryId', 'colorId'],
  computed: {
    categories() {
      return categories;
    },
    colors() {
      return colors;
    }
  },
  watch: {
    priceFrom(value) {
      this.currentPriceFrom = value;
    },
    priceTo(value) {
      this.currentPriceTo = value;
    },
    categoryId(value) {
      this.currentCategoryId = value;
    },
    colorId(value) {
      this.currentColorId = value;
    },
  },
  methods: {
    submit () {
      this.$emit('update:priceFrom', this.currentPriceFrom);
      this.$emit('update:priceTo', this.currentPriceTo);
      this.$emit('update:categoryId', this.currentCategoryId);
      this.$emit('update:colorId', this.currentColorId);
    },
    reset () {
      this.$emit('update:priceFrom', 0);
      this.$emit('update:priceTo', 0);
      this.$emit('update:categoryId', 0);
      this.$emit('update:colorId', 0);
    }
  }
}
</script>
