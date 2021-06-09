<template>
  <div class="review-box">
    <div class="box-1">
      <div class="profile-pic">
        <img :src="review.profile_pic" class="image" alt="Profile Pic" />
      </div>
      <div class="name-rating">
        <div class="name text-medium text-bold">{{ review.name }}</div>
        <div class="name text-medium text-light">
          {{ review.date_posted.split('-').join('/') }}
        </div>
        <StarRating :rating="review.rate" :font-size="15"></StarRating>
      </div>
    </div>
    <div class="box-2 text-medium mt-1">
      {{ review.message }}
    </div>
  </div>
</template>

<script>
import StarRating from '~/components/DefaultComponent/star-rating'
export default {
  components: {
    StarRating,
  },

  props: {
    review: {
      type: [Array, Object],
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.review-box {
  .box-1 {
    display: flex;
    align-items: center;

    .profile-pic {
      margin-right: 8px;

      .image {
        width: 54px;
        height: 54px;
        object-fit: cover;
        border-radius: 100%;
      }
    }
  }
}
</style>
