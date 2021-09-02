<template>
  <div>
    <NavBar></NavBar>
    <div class="carousel-container">
      <Carousel :elements="elements"></Carousel>
    </div>
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
        @click="addToCart"
        >Add to cart</Button
      >
    </div>

    <div class="description mt-2 ml-1 mr-1">
      <div class="text-large text-bold">Description</div>
      <div class="text mt-1 ml-xs text-medium">
        {{ bookDetail.description }}
      </div>
    </div>

    <div v-if="reviews.length > 0" class="reviews mt-2 ml-1 mr-1 mb-2">
      <div class="text-large text-bold">Reviews</div>
      <div class="mt-1 rating">
        <div class="value text-xl text-bold">{{ averageRating }}</div>
        <div class="star">
          <StarRating :rating="2.5" :font-size="20"></StarRating>
          <div class="total-reviews text-medium text-bold">
            {{ reviews.length }} Reviews
          </div>
        </div>
      </div>

      <div class="review-percentages mt-1">
        <div v-for="(rate, index) in rates" :key="index" class="star-number">
          <div class="star text-medium text-bold">{{ rate }}</div>
          <div class="bar" @click="filterReview(rate)">
            <PercentageBar :percent="starPercentage(rate)"></PercentageBar>
          </div>
          <div class="percent text-medium text-bold">
            {{ starPercentage(rate) }}%
          </div>
        </div>
      </div>
      <div
        v-if="filterReviews"
        class="reset-filter text-medium mt-1 mb-1 ml-1"
        @click="filterReviews = null"
      >
        Reset Filter
      </div>
      <div v-if="!spinner" class="user-reviews">
        <template v-if="filterReviews">
          <div
            v-for="review in filterReviews.slice(0, 4)"
            :key="review.id"
            class="user-review mt-2"
          >
            <UserReview :review="review"></UserReview>
          </div>
        </template>
        <template v-else>
          <div
            v-for="review in reviews.slice(0, 4)"
            :key="review.id"
            class="user-review mt-2"
          >
            <UserReview :review="review"></UserReview>
          </div>
        </template>
      </div>
      <!-- <div class="text mt-1 ml-xs text-medium">
        {{ bookDetail.description }}
      </div> -->
    </div>
    <div v-if="spinner" class="spinner">
      <LoadingSpinner></LoadingSpinner>
    </div>

    <div class="all-reviews">
      <AllReviews
        :show-modal="showModal"
        :reviews="filterReviews ? filterReviews : reviews"
        @close="close"
      ></AllReviews>
    </div>

    <div v-if="!spinner" class="review-btn">
      <Button
        v-if="reviews.length > 0"
        button-class="backgroud-open-btn"
        @click="showModal = true"
        >View All Reviews</Button
      >
    </div>
    <Message v-if="bookDetail.stock === 0" :show-message-box="showMessageBox"
      >Sorry, this item is out of stock</Message
    >
    <SimilarItems :similar-items="similarItems"></SimilarItems>
    <Footer></Footer>
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
import AllReviews from '~/components/DefaultComponent/all-reviews.vue'
import SimilarItems from '~/components/DefaultComponent/similarItems.vue'
import LoadingSpinner from '~/components/DefaultComponent/loading-spinner'
import Footer from '~/components/HomeComponent/Footer.vue'
export default {
  components: {
    Carousel,
    NavBar,
    Button,
    Message,
    StarRating,
    PercentageBar,
    UserReview,
    LoadingSpinner,
    AllReviews,
    SimilarItems,
    Footer,
  },
  middleware: ['addView'],
  async asyncData({ params }) {
    const { data } = await axios.get(
      `${process.env.baseUrl}/books/${params.slug}/`
    )
    const reviews = await axios.get(
      `${process.env.baseUrl}/books/${params.slug}/reviews/`
    )
    const response = await axios.get(`${process.env.baseUrl}/books/?page=2`)
    const similarItems = await axios.get(
      `${process.env.baseUrl}/books/recommendations/${data.title}/`
    )
    return {
      arrived: response.data.results,
      bookDetail: data,
      reviews: reviews.data.results,
      similarItems: similarItems.data.results,
    }
  },

  data() {
    return {
      elements: {
        imagePath: null,
        loop: false,
      },
      showMessageBox: false,
      filterReviews: '',
      rates: [5, 4, 3, 2, 1],
      spinner: false,
      showModal: false,
    }
  },

  computed: {
    bookComputedImages() {
      const images = this.bookDetail.book_images.map(
        (element, index) => element.image
      )
      return images
    },
    averageRating() {
      let totalRating = 0
      this.reviews.forEach((review) => {
        totalRating += review.rate
      })
      return totalRating / this.reviews.length
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

    close() {
      this.showModal = false
    },

    async filterReview(rate) {
      this.spinner = true
      const { data } = await axios.get(
        `${process.env.baseUrl}/books/${this.$route.params.slug}/reviews/?rate=${rate}`
      )
      this.filterReviews = data.results
      this.spinner = false
    },

    starPercentage(star) {
      let numberOfReviewers = 0
      this.reviews.forEach((review) => {
        if (review.rate === star) {
          numberOfReviewers++
        }
      })
      return Math.floor(
        100 -
          ((this.reviews.length - numberOfReviewers) / this.reviews.length) *
            100
      )
    },

    changeShowMessageBox() {
      this.showMessageBox = true
      setTimeout(() => {
        this.showMessageBox = false
      }, 2000)
    },

    addToCart() {
      this.showMessageBox = true
      setTimeout(() => {
        this.showMessageBox = false
      }, 2000)
      this.$store.dispatch('addToCart', this.$route.params.slug)
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

// .modal {
//   height: 100%;
//   width: 100%;
//   position: fixed;
// }

.review-btn {
  padding: 0 10px;
  margin-bottom: 15px;
}

.carousel-container {
  height: 370px;
}

.star-number {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  .bar {
    flex: 0 0 80%;
    cursor: pointer;
  }
}

.reset-filter {
  color: #0077b6;
  cursor: pointer;
}

.test-image {
  width: 100%;
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
