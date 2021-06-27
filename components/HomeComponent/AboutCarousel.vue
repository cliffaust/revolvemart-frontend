<template>
  <div>
    <div class="header-text">
      Dive Into
      <div class="revolvemart-text-logo">RevolveMart</div>
    </div>
    <div class="carousel">
      <Carousel :elements="elements"></Carousel>
    </div>
  </div>
</template>

<script>
import image1 from '@/assets/logo/modal/image1-small.jpg'
import image2 from '@/assets/logo/modal/image2-small.jpg'
import image3 from '@/assets/logo/modal/image3-small.jpg'
import Carousel from '~/components/DefaultComponent/carousel'
export default {
  components: {
    Carousel,
  },

  data() {
    return {
      elements: {
        imagePath: [image1, image2, image3],
        texts: [
          {
            header: 'Quality Control',
            subText: 'Every book on our shelves undergoes quality control',
          },

          {
            header: 'Readers First',
            subText: 'We make sure the exprience of our readers are the finest',
          },

          {
            header: 'Quality Education',
            subText:
              "Our affordable books provides the opportunity to people that can't afford to buy the best books",
          },
        ],

        loop: true,
        backdrop: true,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
// .carousel {
//   height: 256px;
// }

.header-text {
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
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
</style>
