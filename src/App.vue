<template>
  <div>
  <header class="header">
    <div class="header-wrapper container">
      <router-link class="header-info" :to="{name: 'main'}">Каталог</router-link>

      <router-link class="header-logo" :to="{name: 'main'}">
        <img src="img/svg/game-die-svgrepo-com.svg" width="50" height="50">
      </router-link>

      <a class="header-tel" href="tel:+7999869999">
        +7 (999)-86-99-99
      </a>
      <CartIndicator></CartIndicator>
    </div>
    </header>

    <router-view></router-view>

    <footer class="footer">
      <div class="footer-wrapper container">
        <ul class="footer-links">
          <li>
            <a class="footer-link" href="#">
              Каталог
            </a>
          </li>
          <li>
            <a class="footer-link" href="tel:+7999869999">
              +7 (999)-86-99-99
            </a>
          </li>
          <li>
            <a class="footer-link" href="bibatututu@yandex.ru">
              bibatututu@yandex.ru
            </a>
          </li>
        </ul>

        <ul class="footer-social social">
          <li class="social-item">
            <a class="social-link" href="#" aria-label="Вконтакте">
              <svg width="20" height="11" fill="currentColor">
                <use xlink:href="#icon-vk"></use>
              </svg>
            </a>
          </li>
          <li class="social-item">
            <a class="social-link" href="#" aria-label="Telegram">
              <svg width="19" height="17" fill="currentColor">
                <use xlink:href="#icon-telegram"></use>
              </svg>
            </a>
          </li>
        </ul>

        <br/>

        <span class="footer-copyright">
          Сделано в 2023
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
import CartIndicator from '@/components/CartIndicator.vue';

export default {
  components: { CartIndicator },
}
</script>

