<template>
  <div v-if="bookDetail.cover_image">
    <NavBar></NavBar>
    <Carousel :elements="elements"></Carousel>
    <div
      v-if="bookDetail.stock === 0"
      class="stock-message text-medium text-bold text-red mt-1 ml-1"
    >
      This item is out of stock
    </div>
    <div class="description-box mt-1 ml-1">
      <div class="flex price-box mb-xs">
        <div
          v-if="bookDetail.discount_price"
          class="price text-large text-bold align-self-end mr-xs"
        >
          GH¢{{ bookDetail.discount_price }}
        </div>
        <div
          v-if="bookDetail.discount_price && bookDetail.price"
          :style="[
            bookDetail.discount_price
              ? { 'text-decoration': 'line-through', color: '#e63947' }
              : '',
          ]"
          class="price text-small align-self-end mb-xxs"
        >
          GH¢{{ bookDetail.price }}
        </div>
        <div
          v-if="!bookDetail.discount_price"
          class="price text-large text-bold align-self-end mr-xs"
        >
          GH¢{{ bookDetail.price }}
        </div>
      </div>
      <div class="title text-medium text-bold">{{ bookDetail.title }}</div>
      <div class="autor text-medium">By {{ bookDetail.author }}</div>
    </div>
    <div class="btn-box mt-2 px-1">
      <Button
        button-class="btn-primary"
        :style="{ width: '45%' }"
        @click="changeShowMessageBox"
        >Buy now</Button
      >
      <Button
        button-class="btn-open"
        :style="{ width: '45%' }"
        @click="changeShowMessageBox"
        >Add to cart</Button
      >
    </div>

    <div class="description mt-2 ml-1 mr-1">
      <div class="text-large text-bold">Description</div>
      <div class="text mt-1 ml-xs text-medium">
        {{ bookDetail.description }}
      </div>
    </div>

    <div class="reviews mt-2 ml-1 mr-1 mb-2">
      <div class="text-large text-bold">Reviews</div>
      <div class="mt-1 rating">
        <div class="value text-xl text-bold">4.5</div>
        <div class="star">
          <StarRating :rating="2.5" :font-size="20"></StarRating>
          <div class="total-reviews text-medium text-bold">2031 Reviews</div>
        </div>
      </div>

      <div class="review-percentages mt-1">
        <div class="star-number">
          <div class="star text-medium text-bold">5</div>
          <div class="bar"><PercentageBar :percent="62"></PercentageBar></div>
          <div class="percent text-medium text-bold">62%</div>
        </div>
        <div class="star-number">
          <div class="star text-medium text-bold">4</div>
          <div class="bar"><PercentageBar :percent="18"></PercentageBar></div>
          <div class="percent text-medium text-bold">18%</div>
        </div>
        <div class="star-number">
          <div class="star text-medium text-bold">3</div>
          <div class="bar"><PercentageBar :percent="7"></PercentageBar></div>
          <div class="percent text-medium text-bold">7%</div>
        </div>
        <div class="star-number">
          <div class="star text-medium text-bold">2</div>
          <div class="bar"><PercentageBar :percent="8"></PercentageBar></div>
          <div class="percent text-medium text-bold">8%</div>
        </div>
        <div class="star-number">
          <div class="star text-medium text-bold">1</div>
          <div class="bar"><PercentageBar :percent="5"></PercentageBar></div>
          <div class="percent text-medium text-bold">5%</div>
        </div>
      </div>
      <div class="user-reviews mt-2">
        <UserReview></UserReview>
      </div>
      <!-- <div class="text mt-1 ml-xs text-medium">
        {{ bookDetail.description }}
      </div> -->
    </div>
    <Message v-if="bookDetail.stock === 0" :show-message-box="showMessageBox"
      >Sorry, this item is out of stock</Message
    >
  </div>
</template>

<script>
import axios from 'axios'
import Carousel from '~/components/DefaultComponent/carousel'
import NavBar from '~/components/DefaultComponent/navbar'
import Button from '~/components/DefaultComponent/baseButton'
import Message from '~/components/DefaultComponent/message'
import StarRating from '~/components/DefaultComponent/star-rating'
import PercentageBar from '~/components/DefaultComponent/percentage-bar'
import UserReview from '~/components/DefaultComponent/user-review'
export default {
  components: {
    Carousel,
    NavBar,
    Button,
    Message,
    StarRating,
    PercentageBar,
    UserReview,
  },
  async asyncData({ params }) {
    const { data } = await axios.get(
      `${process.env.baseUrl}/books/${params.slug}/`
    )
    const reviews = await axios.get(
      `${process.env.baseUrl}/books/${params.slug}/reviews/`
    )
    return {
      bookDetail: data,
      reviews: reviews.data.results,
    }
  },

  data() {
    return {
      elements: {
        imagePath: null,
        loop: false,
      },
      showMessageBox: false,
    }
  },

  computed: {
    bookComputedImages() {
      const images = this.bookDetail.book_images.map(
        (element, index) => element.image
      )
      return images
    },
  },

  created() {
    this.bookImages()
  },

  methods: {
    bookImages() {
      this.elements.imagePath = [
        this.bookDetail.cover_image,
        ...this.bookComputedImages,
      ]
    },

    changeShowMessageBox() {
      this.showMessageBox = true
      setTimeout(() => {
        this.showMessageBox = false
      }, 2000)
    },
  },
}
</script>

<style lang="scss" scoped>
.btn-box {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.star-number {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  .bar {
    flex: 0 0 80%;
  }
}

.rating {
  display: flex;

  .star {
    display: flex;
    margin-top: 8px;
    margin-left: 6px;

    .total-reviews {
      margin-left: 2px;
    }
  }
}
</style>
