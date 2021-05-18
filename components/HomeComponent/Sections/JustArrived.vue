<template>
  <div>
    <div class="text">Just Arrived</div>
    <client-only>
      <div v-swiper="swiperOption" class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <Item
              :image-path="require('~/assets/logo/book9.jpg')"
              :price="18.99"
              :new-price="14.99"
              book-title="Flora and Ulysses"
              author="Caroline James"
              :discount-percent="13"
            ></Item>
          </div>
          <div class="swiper-slide">
            <Item
              :image-path="require('~/assets/logo/book5.jpg')"
              :price="54"
              book-title="Machine Learning with python"
              author="Jerry Lore"
            ></Item>
          </div>
          <div class="swiper-slide">
            <Item
              :image-path="require('~/assets/logo/book2.jpg')"
              :price="41.99"
              :new-price="38.49"
              book-title="The Clean Coder"
              author="Robert Martin"
              :discount-percent="12"
            ></Item>
          </div>
          <div class="swiper-slide">
            <Item
              :image-path="require('~/assets/logo/book10.jpg')"
              :price="31"
              :new-price="28"
              book-title="Everybody belongs to everyone else"
              author="Garry PArker"
              :discount-percent="15"
            ></Item>
          </div>
          <div class="swiper-slide">
            <Item
              :image-path="require('~/assets/logo/book11.jpg')"
              :price="29"
              book-title="Salman Rushdie"
              author="Kingston Gabin"
            ></Item>
          </div>
          <div class="swiper-slide">
            <Item
              :image-path="require('~/assets/logo/book12.jpg')"
              :price="67.32"
              :new-price="50"
              book-title="Ralph Ellison"
              author="Jake Peter"
              :discount-percent="19"
            ></Item>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import Item from '~/components/DefaultComponent/item'
export default {
  components: {
    Item,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.text {
  display: block;
  padding: 0.8rem;
  margin-left: 0.6rem;
  position: relative;
  font-weight: 800;
  font-size: 2.1rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    margin-left: 1rem;
    background-color: $primary-bgcolor-2;
  }
}

.swiper-slide {
  width: 150px;
  height: 255px;
}

.swiper-wrapper {
  align-items: stretch;
  display: flex;
}

.swiper-container {
  height: 300px;
}
</style>
