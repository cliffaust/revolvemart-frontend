<template>
  <div>
    <div class="text">Just under GH¢20</div>
    <div v-swiper="swiperOption" class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="less in under20" :key="less.id" class="swiper-slide">
          <Item
            :image-path="less.cover_image"
            :price="less.price"
            :new-price="less.discount_price"
            :book-title="less.title"
            :author="less.author"
            :discount-percent="Math.floor(less.discount_percentage)"
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
    under20: {
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
