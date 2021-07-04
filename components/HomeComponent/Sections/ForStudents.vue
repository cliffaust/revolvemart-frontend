<template>
  <div class="container">
    <div class="text-btn-box">
      <span class="text">For Students</span><button class="btn">More</button>
    </div>

    <div class="items">
      <div
        v-for="student in students.slice(0, 4)"
        :key="student.id"
        class="item"
      >
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
    font-weight: bold;
    margin-right: 1rem;
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
  margin-bottom: 3rem;
  padding: 0 6px;
}

.items {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .item {
    flex: 0 0 48%;
    margin-bottom: 2rem;
    height: 275px;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }
}
</style>
