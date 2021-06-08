<template>
  <div class="review-box">
    <div class="box-1">
      <div class="profile-pic">
        <img
          src="~/assets/logo/modal/image3-small.jpg"
          class="image"
          alt="Profile Pic"
        />
      </div>
      <div class="name-rating">
        <div class="name text-medium text-bold">Clifford Austin</div>
        <StarRating :rating="4" :font-size="15"></StarRating>
      </div>
    </div>
    <div class="box-2 text-medium mt-1">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat cumque
      beatae sed sit alias odio? Assumenda, rem. Voluptatibus veniam odio
      deserunt, aut repellat tempora quam molestiae a asperiores cum eligendi.
    </div>
  </div>
</template>

<script>
import StarRating from '~/components/DefaultComponent/star-rating'
export default {
  components: {
    StarRating,
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
