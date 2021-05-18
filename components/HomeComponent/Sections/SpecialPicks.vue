<template>
  <div>
    <div class="header-text">Weekly Special Pick</div>
    <div class="container">
      <img
        class="image"
        src="~/assets/logo/SpecialPicksImages/image1-small.jpg"
        alt="Image Carousel"
      />
      <div class="header">
        <div class="text">Books for Aspiring Entrepreneur</div>
        <div class="sub-text">
          A special selection that is hand picked by our team for people who
          aspire to start or has started a business
        </div>
        <a href="#" class="link">Let Me See The Books</a>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.header-text {
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
  font-weight: 700;
  margin-left: 0.5rem;
  font-family: $secondary-font-2;
}

.gsap-test {
  margin: 2rem 0;

  .box-1 {
    width: 150px;
    height: 150px;
    background-color: $primary-bgcolor-2;
  }
}

.container {
  margin-top: 1rem;
  position: relative;
  height: 325px;
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

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
      font-size: 1.4rem;
      margin-bottom: 0.4rem;
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
}
</style>
