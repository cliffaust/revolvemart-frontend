<template>
  <div class="container">
    <div class="text-btn-box">
      <span class="text">Check These Out</span><button class="btn">More</button>
    </div>
    <div v-swiper="swiperOption" class="swiper-container">
      <div class="swiper-wrapper">
        <div
          v-for="book in books.slice(0, 7)"
          :key="book.id"
          class="swiper-slide"
        >
          <Item
            :image-path="book.cover_image"
            :price="book.price"
            :new-price="book.discount_price"
            :book-title="book.title"
            :author="book.author"
            :discount-percent="Math.floor(book.discount_percentage)"
          ></Item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
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

  computed: mapState({
    books: (state) => state.Books.getBooks.books.slice(0, 4),
  }),
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

.swiper-slide {
  width: 170px;
  height: 265px;
}

.swiper-wrapper {
  align-items: stretch;
  display: flex;
}

.swiper-container {
  height: 300px;
}
</style>
