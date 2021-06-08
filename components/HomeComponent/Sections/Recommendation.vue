<template>
  <div>
    <div class="text">Check These Out</div>
    <div v-swiper="swiperOption" class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="book in books" :key="book.id" class="swiper-slide">
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

  computed: mapState({ books: (state) => state.Books.getBooks.books }),
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
