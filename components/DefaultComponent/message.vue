<template>
  <transition @enter="enter" @before-enter="beforeEnter" @leave="leave">
    <div
      v-if="showMessageBox"
      :css="false"
      class="message-box"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <div class="text text-medium text-bold">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
import gsap from 'gsap'
export default {
  inheritAttrs: false,
  props: {
    showMessageBox: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    beforeEnter(el) {
      el.style.bottom = 0
    },
    enter(el, done) {
      gsap.to(el, {
        bottom: 20,
        duration: 0.5,
        ease: 'back.out(10)',
        onComplete: done,
      })
    },

    leave(el, done) {
      gsap.to(el, {
        bottom: -20,
        duration: 0.5,
        opacity: 0,
        ease: 'expo.out',
        onComplete: done,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.message-box {
  padding: 1rem 2rem;
  border-radius: 1rem;
  background-color: #fff;
  -webkit-box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 15px -1px rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 280px;
  // bottom: 20px;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
