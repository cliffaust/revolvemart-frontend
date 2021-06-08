<template>
  <div>
    <client-only>
      <div v-swiper="swiperOption" class="swiper-container">
        <div class="swiper-wrapper">
          <div
            v-for="(image, index) in elements.imagePath"
            :key="index"
            :class="['swiper-slide', { 'swiper-style': elements.backdrop }]"
          >
            <img class="image" :src="image" alt="Image Carousel" />
            <div v-if="elements.texts" class="header">
              <div class="text">{{ elements.texts[index].header }}</div>
              <div class="sub-text">
                {{ elements.texts[index].subText }}
              </div>
              <a href="#" class="link">Learn More</a>
            </div>
          </div>
        </div>
        <div slot="pagination" class="swiper-pagination"></div>
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  props: {
    elements: {
      type: [Object, Array],
      required: true,
    },
  },
  data() {
    return {
      swiperOption: {
        loop: this.elements.loop,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.swiper-style {
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 35, 51, 0.63);
    z-index: 1;
  }
}

.swiper-pagination {
  /deep/ &-bullet {
    opacity: 1;
    &-active {
      background-color: $primary-bgcolor-2;
    }
  }
}

.header {
  position: absolute;
  z-index: 3;
  color: #fff;
  bottom: 40px;
  left: 20px;

  .text {
    font-size: 2.4rem;
    margin-bottom: 0.6rem;
    font-family: $secondary-font-2;
    font-weight: 700;
  }

  .sub-text {
    font-size: 1.3rem;
    margin-bottom: 0.2rem;
  }

  .link {
    font-size: 1.6rem;
    margin: 4rem auto 0 auto;
    text-decoration: none;
    padding: 0.4rem 0;
    font-weight: 700;
    color: inherit;
    position: relative;

    &::after {
      content: '';
      width: 100%;
      height: 3px;
      background-color: #fca21146;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }

    &::before {
      content: '';
      width: 0%;
      height: 3px;
      background-color: #fca311;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      transition: 0.3s ease;
    }

    &:hover::before {
      width: 100%;
    }
  }
}

.swiper-wrapper {
  align-items: stretch;
  display: flex;
}

.swiper-container {
  overflow: hidden;
  height: 325px;
  // margin-bottom: 2rem;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
