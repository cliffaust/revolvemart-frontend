<template>
  <div>
    <div class="text">For Students</div>
    <client-only>
      <div v-swiper="swiperOption" class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <Item
              :image-path="require('~/assets/logo/book13.jpg')"
              :price="43.99"
              :new-price="22.99"
              book-title="Capitalism and Freedom"
              author="Milton FriedMan"
              :discount-percent="41"
            ></Item>
          </div>
          <div class="swiper-slide">
            <Item
              :image-path="require('~/assets/logo/book14.jpg')"
              :price="29.99"
              book-title="Why Nations Fail"
              author="James Robinson"
            ></Item>
          </div>
          <div class="swiper-slide">
            <Item
              :image-path="require('~/assets/logo/book15.jpg')"
              :price="41.99"
              :new-price="38.49"
              book-title="Frekonomics"
              author="James McBride"
              :discount-percent="11"
            ></Item>
          </div>
          <div class="swiper-slide">
            <Item
              :image-path="require('~/assets/logo/book16.jpg')"
              :price="52"
              :new-price="42"
              book-title="Calculus for Dummies"
              author="Mark Ryan"
              :discount-percent="15"
            ></Item>
          </div>
          <div class="swiper-slide">
            <Item
              :image-path="require('~/assets/logo/book7.jpg')"
              :price="29"
              book-title="Hamnet"
              author="Kate Maggie"
            ></Item>
          </div>
          <div class="swiper-slide">
            <Item
              :image-path="require('~/assets/logo/book3.jpg')"
              :price="67.32"
              :new-price="50"
              book-title="Algorithms"
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
  margin-left: 1rem;
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
