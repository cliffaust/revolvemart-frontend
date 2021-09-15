<template>
  <div>
    <NavBar></NavBar>
    <div class="heading">Order Items</div>
    <div class="item-container">
      <div v-for="order in orders" :key="order.id" class="item">
        <nuxt-link :to="{ path: `/orders/${order.id}` }" class="book-item">
          <div class="image-box">
            <img class="image" :src="order.book.cover_image" alt="Image" />
          </div>
          <div class="description">
            <div class="title">{{ order.book.title }}</div>
            <div class="author">By {{ order.book.author }}</div>
            <div class="quantity text-bold">Quantity: {{ order.quantity }}</div>

            <div class="price-box">
              <div v-if="order.book.discount_price" class="new-price">
                GH¢{{ order.book.discount_price }}
              </div>
              <div
                class="price"
                :style="[
                  order.book.discount_price
                    ? { 'text-decoration': 'line-through', color: '#e63947' }
                    : '',
                ]"
              >
                GH¢{{ order.book.price }}
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import axios from 'axios'
import NavBar from '~/components/DefaultComponent/navbar'
import Footer from '~/components/HomeComponent/Footer.vue'
export default {
  components: {
    NavBar,
    Footer,
  },

  async asyncData({ store, params }) {
    const { data } = await axios.get(`${process.env.baseUrl}/user-orders/`, {
      headers: {
        Authorization: 'Token ' + store.state.signin.token,
      },
    })

    return {
      orders: data.results,
    }
  },
}
</script>

<style lang="scss" scoped>
.heading {
  display: block;
  padding: 0.8rem;
  margin-left: 0.6rem;
  margin-bottom: 2rem;
  position: relative;
  font-weight: 800;
  font-size: 2.5rem;
  font-family: $secondary-font-1;

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

.item-container {
  min-height: 500px;
}

.book-item {
  margin-top: 1.5em;
  width: 90%;
  padding: 0.5rem;
  border-radius: 1rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  position: relative;
  text-decoration: none;
  color: inherit;
  -webkit-box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 11px -1px rgba(0, 0, 0, 0.15);
}

.image-box {
  height: 120px;
  width: 120px;
  flex: 0 0 45%;

  .image {
    height: 100%;
    width: 100%;
    border-radius: 0.5rem;
  }
}

.item {
  display: flex;
  flex-direction: column;

  text-decoration: none;
  color: inherit;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
}

.title {
  font-size: 1.4rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
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

.description {
  flex: 0 0 50%;
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
