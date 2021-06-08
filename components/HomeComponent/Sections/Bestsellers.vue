<template>
  <div>
    <div class="text">This Week's Bestsellers</div>
    <div v-swiper="swiperOption" class="swiper-container">
      <div class="swiper-wrapper">
        <nuxt-link
          v-for="bestSeller in bestSellers"
          :key="bestSeller.id"
          :to="{ path: `/books/${bestSeller.slug}` }"
          class="swiper-slide"
          append
        >
          <Item
            :image-path="bestSeller.cover_image"
            :price="bestSeller.price"
            :new-price="bestSeller.discount_price"
            :book-title="bestSeller.title"
            :author="bestSeller.author"
            :discount-percent="Math.floor(bestSeller.discount_percentage)"
          ></Item>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Item from '~/components/DefaultComponent/item'
export default {
  components: {
    Item,
  },
  props: {
    bestSellers: {
      type: [Array, Object],
      required: true,
    },
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
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}

.swiper-wrapper {
  align-items: stretch;
  display: flex;
}

.swiper-container {
  height: 300px;
}
</style>
