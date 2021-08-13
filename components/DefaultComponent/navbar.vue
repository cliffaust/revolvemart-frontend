<template>
  <div class="navbar">
    <burger></burger>
    <nuxt-link to="/">
      <img class="logo noSelect" src="~/assets/logo/Cart16x16.png" alt="Logo" />
    </nuxt-link>
    <div class="shopping-cart-icon-container noSelect">
      <font-awesome-icon
        :icon="['fas', 'shopping-cart']"
        class="shopping-cart-icon"
      />
      <div class="number-in-cart">3</div>
    </div>
    <NavbarSlider></NavbarSlider>
  </div>
</template>

<script>
import burger from './burger'
import NavbarSlider from '~/components/DefaultComponent/navbarSlider.vue'
export default {
  components: {
    burger,
    NavbarSlider,
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  // background-color: $primary-bgcolor-1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 2rem;

  .logo {
    height: 35px;
    object-fit: cover;
    cursor: pointer;
  }

  .shopping-cart-icon-container {
    width: 25px;
    height: 25px;
    cursor: pointer;
    position: relative;

    .shopping-cart-icon {
      width: 100%;
      height: 100%;
      color: $primary-bgcolor-1;
    }

    .number-in-cart {
      position: absolute;
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      top: -10px;
      left: 15px;
      font-weight: bold;
      // padding: 1rem 1rem;
      background-color: $primary-bgcolor-2;
      border-radius: 100%;
    }
  }
}
</style>
