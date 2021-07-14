<template>
  <div :class="[showModal ? 'backdrop' : 'backdrop-not-active']" @click="close">
    <div
      :class="[showModal ? 'review-container' : 'review-container-not-active']"
      @click.stop
    >
      <div v-for="review in reviews" :key="review.id" class="user-review mt-2">
        <UserReview :review="review"></UserReview>
      </div>
      <font-awesome-icon :icon="['fas', 'times']" class="icon" @click="close" />
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import UserReview from '~/components/DefaultComponent/user-review'
export default {
  components: {
    UserReview,
  },
  props: {
    reviews: {
      type: [Object, Array],
      required: true,
    },

    showModal: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    close() {
      this.$emit('close')
    },

    beforeEnter(el) {
      el.style.bottom = 0
    },

    enter(el, done) {
      gsap.to(el, {
        bottom: 200,
        duration: 5,
        ease: 'back.out(10)',
        onComplete: done,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background: #cecdcd;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #333;
}

.review-container-not-active {
  position: fixed;
  bottom: 0;
  //   top: 100px;
  //   left: 0;
  //   right: 0;
  height: 85%;
  transform: translateY(100%);
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  z-index: 9;
  padding: 1.2rem 2rem;
  background-color: #fff;
  overflow-y: scroll;
  transition: transform 0.3s linear;

  .icon {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 14px;
    right: 20px;
    cursor: pointer;
  }
}

.backdrop-not-active {
  position: fixed;
  bottom: 0;
  z-index: 0;
  background-color: rgba(0, 0, 0, 0);
  transition: 0.3s ease;
}

.review-container {
  position: fixed;
  bottom: 0;
  //   top: 100px;
  //   left: 0;
  //   right: 0;
  height: 85%;
  transform: translateY(0);
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  z-index: 9;
  padding: 1.2rem 2rem;
  background-color: #fff;
  overflow-y: scroll;
  transition: transform 0.3s linear;

  .icon {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 14px;
    right: 20px;
    cursor: pointer;
  }
}

.backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.5);
  transition: 0.3s ease;
}
</style>
