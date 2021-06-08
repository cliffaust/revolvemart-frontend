<template>
  <div>
    <div class="text">Just Arrived</div>
    <div v-swiper="swiperOption" class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="arrive in arrived" :key="arrive.id" class="swiper-slide">
          <Item
            :image-path="arrive.cover_image"
            :price="arrive.price"
            :new-price="arrive.discount_price"
            :book-title="arrive.title"
            :author="arrive.author"
            :discount-percent="Math.floor(arrive.discount_percentage)"
          ></Item>
        </div>
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
    arrived: {
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
