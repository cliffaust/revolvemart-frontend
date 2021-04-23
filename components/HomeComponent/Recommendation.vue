<template>
  <div>
    <div class="text">Check These Out</div>
    <div class="recommended-items-container">
      <RecommendedItem
        :image-path="require('~/assets/logo/book1.jpg')"
        :price="25.99"
        :new-price="22.99"
        book-name="The Programming Coventions"
        author="J.J Lorem"
        :discount-percent="20"
      ></RecommendedItem>
      <RecommendedItem
        :image-path="require('~/assets/logo/book8.jpg')"
        :price="19.99"
        book-name="My Dark Vanessa"
        author="Kate Elizabeth"
      ></RecommendedItem>
    </div>
  </div>
</template>

<script>
import RecommendedItem from '~/components/DefaultComponent/recommendedItem'
export default {
  components: {
    RecommendedItem,
  },
}
</script>

<style lang="scss" scoped>
.text {
  display: block;
  padding: 0.8rem;
  margin-left: 1rem;
  position: relative;
  font-weight: 600;
  font-size: 2.5rem;

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

.recommended-items-container {
  display: flex;
}
</style>
