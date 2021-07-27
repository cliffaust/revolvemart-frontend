<template>
  <footer class="footer">
    <div class="image-container">
      <img
        class="logo noSelect"
        src="~/assets/logo/revolvemart-LOGO-B4.png"
        alt="Logo"
      />
    </div>
    <div class="section-1">
      <div class="link-box">
        <a href="#" class="link">How we work</a>
      </div>
      <div class="link-box">
        <a href="#" class="link">Help & Support</a>
      </div>
      <div class="link-box">
        <a href="#" class="link">Return Policy</a>
      </div>
      <div class="link-box">
        <a href="#" class="link">Privacy & Policy</a>
      </div>
      <div class="link-box">
        <a href="#" class="link">Contact Us</a>
      </div>
      <div class="link-box">
        <a href="#" class="link">Delivery Service</a>
      </div>
      <div class="link-box">
        <a href="#" class="link">Sell your book</a>
      </div>
      <div class="link-box">
        <a href="#" class="link">Blog</a>
      </div>
    </div>
    <div class="section-2">
      <font-awesome-icon :icon="['fab', 'facebook']" class="social-icon" />
      <font-awesome-icon :icon="['fab', 'twitter']" class="social-icon" />
      <font-awesome-icon :icon="['fab', 'instagram']" class="social-icon" />
    </div>
  </footer>
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
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      duration: 3,
    })
  },
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 2rem 1rem;
  background-color: #f4f4f4;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  .image-container {
    align-self: center;
  }

  .section-1 {
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 3rem;
    .link-box {
      margin: 2rem auto 0 auto;
      padding: 0.4rem 0;
      position: relative;
      align-items: center;
      flex: 0 0 50%;

      .link {
        font-size: 1.5rem;
        text-decoration: none;
        font-weight: 700;
        color: inherit;
      }
    }
  }

  .section-2 {
    align-self: center;

    .social-icon {
      width: 20px;
      height: 20px;
      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
  }

  .logo {
    height: 40px;
    object-fit: cover;
    cursor: pointer;
    z-index: 4;
  }
}
</style>
