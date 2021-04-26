<template>
  <div class="container">
    <div class="image-box">
      <img class="item-image" :src="imagePath" alt="Book Image" />
    </div>
    <div class="title-author-price">
      <div class="title">
        {{ bookTitle }}
      </div>

      <div>
        <div class="author">By {{ author }}</div>

        <div class="price-box">
          <div v-if="newPrice" class="new-price">GH¢{{ newPrice }}</div>
          <div
            class="price"
            :style="[
              newPrice
                ? { 'text-decoration': 'line-through', color: '#e63947' }
                : '',
            ]"
          >
            GH¢{{ price }}
          </div>
        </div>
      </div>
    </div>
    <div v-if="discountPercent" class="discount-percent">
      -{{ discountPercent }}%
    </div>
    <!-- <div class="btn-box">
      <BaseButton button-class="btn-open">ADD TO CART</BaseButton>
    </div> -->
  </div>
</template>

<script>
// import BaseButton from '~/components/DefaultComponent/baseButton'
export default {
  components: {
    // BaseButton,
  },
  props: {
    imagePath: {
      type: String,
      required: true,
    },

    bookTitle: {
      type: String,
      required: true,
    },

    author: {
      type: String,
      required: true,
    },

    discountPercent: {
      type: Number,
      required: false,
      default: null,
    },

    price: {
      type: Number,
      required: true,
    },

    newPrice: {
      type: Number,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  // margin-left: 0.5rem;
  margin-top: 1.5em;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  border-radius: 1rem;
  position: relative;
  // -webkit-box-shadow: 0px 0px 20px -4px rgba(0, 0, 0, 0.45);
  // -moz-box-shadow: 0px 0px 20px -4px rgba(0, 0, 0, 0.45);
  // box-shadow: 0px 0px 20px -4px rgba(0, 0, 0, 0.45);
  -webkit-box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.2);
  &:not(:first-child) {
    margin-left: 1.5rem;
  }
}

.title {
  font-size: 1.6rem;
  font-weight: bold;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.title-author-price {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 80px;
}

.discount-percent {
  position: absolute;
  padding: 0.3rem 0.4rem;
  border-radius: 0.5rem;
  background-color: #e63947;
  font-size: 1.1rem;
  font-weight: bold;
  top: 10px;
  left: 10px;
}

.author {
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 0.5rem;
}

.item-image {
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
}

.image-box {
  height: 150px;
  width: 140px;
  overflow: hidden;
  margin-bottom: 0.8rem;
}

.btn-box {
  width: 120px;
  margin-top: 1.5rem;
}

.price-box {
  display: flex;
  margin-top: 1rem;

  .price {
    font-size: 1.3rem;
    font-weight: 600;
  }

  .new-price {
    font-size: 1.3rem;
    font-weight: 600;
    margin-right: 0.8rem;
  }
}
</style>
