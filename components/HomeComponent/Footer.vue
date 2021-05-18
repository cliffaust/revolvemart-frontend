<template>
  <footer class="footer"></footer>
</template>

<script>
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('.footer', {
      scrollTrigger: {
        trigger: '.footer',
        scrub: true,
      },
      borderTopLeftRadius: 100,
      borderTopRightRadius: 100,
      duration: 3,
    })
  },
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 10rem;
  background-color: $primary-bgcolor-1;
  width: 100%;
  height: 345px;
  margin-top: 3rem;
}
</style>
