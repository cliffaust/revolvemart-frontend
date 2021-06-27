<template>
  <div class="container">
    <!-- <div class="text">This Week's Bestsellers</div> -->
    <div class="text-btn-box">
      <span class="text">This Week's Bestsellers</span
      ><button class="btn">More</button>
    </div>
    <!-- <div v-swiper="swiperOption" class="swiper-container">
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
    </div> -->
    <div class="items">
      <nuxt-link
        v-for="bestSeller in bestSellers.slice(0, 4)"
        :key="bestSeller.id"
        :to="{ path: `/books/${bestSeller.slug}` }"
        class="item"
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
.text-btn-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .btn {
    padding: 0.7rem 1.2rem;
    background-color: #e63947d3;
    background-color: #002333;
    width: 65px;
    border-radius: 0.5rem;
    text-transform: uppercase;
    font-size: 1.2rem;
    color: inherit;
    color: #fff;
    font-family: inherit;
    margin-right: 1rem;
    font-weight: bold;
    cursor: pointer;
    border: none;

    &:focus {
      outline: none;
    }
  }
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
}

// .swiper-slide {
//   width: 150px;
//   height: 255px;
// }

.container {
  margin-bottom: 2rem;
  padding: 0 6px;
}

.items {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .item {
    flex: 0 0 48%;
    margin-bottom: 1rem;
    height: 265px;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }
}
</style>
