<template>
  <div>
    <div class="text">For Students</div>
    <div v-swiper="swiperOption" class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="student in students" :key="student.id" class="swiper-slide">
          <Item
            :image-path="student.cover_image"
            :price="student.price"
            :new-price="student.discount_price"
            :book-title="student.title"
            :author="student.author"
            :discount-percent="Math.floor(student.discount_percentage)"
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
    students: {
      type: [Object, Array],
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
