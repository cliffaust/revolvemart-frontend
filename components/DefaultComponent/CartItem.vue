<template>
  <div class="cart-item">
    <div class="image-box">
      <img class="image" :src="book.cover_image" alt="Image" />
    </div>
    <div class="description">
      <div class="title">{{ book.author }}</div>
      <div class="author">By {{ book.author }}</div>
      <div class="quantity text-bold">Qty 2</div>
      <div class="price">GH¢{{ book.price }}</div>

      <div class="remove-item mt-1">Remove</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    book: {
      type: [Object, Array],
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.cart-item {
  margin-top: 1.5em;
  width: 85%;
  padding: 0.5rem;
  border-radius: 1rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  position: relative;
  -webkit-box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.15);
}

.image-box {
  height: 120px;

  .image {
    height: 100%;
    width: 120px;
    border-radius: 0.5rem;
  }
}

.remove-item {
  float: right;
  font-size: 1.4rem;
  cursor: pointer;
  color: #e63947;
}

.title {
  font-size: 1.4rem;
}

.quantity {
  font-size: 1.4rem;
  margin-top: 0.7rem;
}

.author {
  font-size: 1.6rem;
  font-weight: bold;
  margin-top: 0.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.price {
  font-size: 1.3rem;
  font-weight: 600;
  margin-top: 1rem;
}
</style>
