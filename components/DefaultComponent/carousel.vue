<template>
  <div>
    <div class="header-text">
      Dive Into
      <div class="revolvemart-text-logo">RevolveMart</div>
    </div>
    <client-only>
      <div v-swiper="swiperOption" class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img
              class="image"
              src="~/assets/logo/modal/image1-small.jpg"
              alt="Image Carousel"
            />
            <div class="header">
              <div class="text">Quality Control</div>
              <div class="sub-text">
                Every book on our shelves undergoes quality control
              </div>
              <a href="#" class="link">Learn More</a>
            </div>
          </div>
          <div class="swiper-slide">
            <img
              class="image"
              src="~/assets/logo/modal/image2-small.jpg"
              alt="Image Carousel"
            />
            <div class="header">
              <div class="text">Readers First</div>
              <div class="sub-text">
                We make sure the exprience of our readers are the finest
              </div>
              <a href="#" class="link">Learn More</a>
            </div>
          </div>
          <div class="swiper-slide">
            <img
              class="image"
              src="~/assets/logo/modal/image3-small.jpg"
              alt="Image Carousel"
            />
            <div class="header">
              <div class="text">Quality Education</div>
              <div class="sub-text">
                Our affordable books provides the opportunity to people that
                can't afford to buy the best books
              </div>
              <a href="#" class="link">Learn More</a>
            </div>
          </div>
        </div>
        <!-- Add Pagination -->
        <div slot="pagination" class="swiper-pagination"></div>
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
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
.swiper-slide {
  margin-top: 1rem;
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
    background: rgba(252, 162, 17, 0.473);
    background: rgba(0, 35, 51, 0.63);
    z-index: 1;
  }
}

.header-text {
  margin-bottom: 0.5rem;
  font-size: 2.8rem;
  font-weight: 700;
  margin-left: 0.5rem;
  font-family: $secondary-font-2;

  .revolvemart-text-logo {
    display: inline-block;
    position: relative;
    font-weight: 800;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
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
    font-family: $secondary-font-3;
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
  margin-bottom: 2rem;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
