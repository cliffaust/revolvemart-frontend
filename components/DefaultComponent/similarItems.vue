<template>
  <div>
    <div class="text text-large mt-2 ml-1 text-bold">You May Like These</div>

    <div v-swiper="swiperOption" class="swiper-container mt-1 mb-2">
      <div class="swiper-wrapper">
        <nuxt-link
          v-for="similarItem in similarItems"
          :key="similarItem.id"
          :to="{ path: `/books/${similarItem.slug}` }"
          class="swiper-slide"
          append
        >
          <Item
            :image-path="similarItem.cover_image"
            :price="similarItem.price"
            :new-price="similarItem.discount_price"
            :book-title="similarItem.title"
            :author="similarItem.author"
            :discount-percent="Math.floor(similarItem.discount_percentage)"
          ></Item>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Item from '~/components/DefaultComponent/item.vue'
export default {
  components: {
    Item,
  },
  props: {
    similarItems: {
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
  width: 170px;
  height: 265px;
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
