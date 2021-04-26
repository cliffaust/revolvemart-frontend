<template>
  <div>
    <div class="text">Check These Out</div>
    <client-only>
      <div v-swiper="swiperOption" class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <Item
              :image-path="require('~/assets/logo/book1.jpg')"
              :price="25.99"
              :new-price="22.99"
              book-title="The Programming Coventions"
              author="J.J Lorem"
              :discount-percent="20"
            ></Item>
          </div>
          <div class="swiper-slide">
            <Item
              :image-path="require('~/assets/logo/book8.jpg')"
              :price="19.99"
              book-title="My Dark Vanessa"
              author="Kate Elizabeth"
            ></Item>
          </div>
          <div class="swiper-slide">
            <Item
              :image-path="require('~/assets/logo/book6.jpg')"
              :price="41.99"
              :new-price="38.49"
              book-title="Deacon King Kong"
              author="James McBride"
              :discount-percent="10"
            ></Item>
          </div>
          <div class="swiper-slide">
            <Item
              :image-path="require('~/assets/logo/book4.jpg')"
              :price="52"
              :new-price="42"
              book-title="Hands-On Machine Learning with Scikit-Learn and Keras"
              author="Aureilien Gideon"
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
