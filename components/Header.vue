<template>
  <div class="header">
    <div class="navbar">
      <burger></burger>
      <img
        class="logo noSelect"
        src="~/assets/logo/revolvemart-LOGO-B3.png"
        alt="Logo"
      />
      <div class="shopping-cart-icon-container noSelect">
        <font-awesome-icon
          :icon="['fas', 'shopping-cart']"
          class="shopping-cart-icon"
        />
        <div class="number-in-cart">2</div>
      </div>
    </div>
    <div class="search">
      <input
        type="text"
        placeholder="Search Revolvemart"
        class="searchbar-input"
      />
      <button class="search-btn">
        <font-awesome-icon
          :icon="['fas', 'search']"
          class="shopping-cart-icon"
        />
      </button>
    </div>
  </div>
</template>

<script>
import burger from '~/components/burger'
export default {
  components: {
    burger,
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  // background-color: $primary-bgcolor-1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 2rem;

  .logo {
    width: 65px;
    height: 40px;
    object-fit: cover;
    cursor: pointer;
  }

  .shopping-cart-icon-container {
    width: 25px;
    height: 25px;
    cursor: pointer;
    position: relative;

    .shopping-cart-icon {
      width: 100%;
      height: 100%;
      color: $primary-bgcolor-1;
    }

    .number-in-cart {
      position: absolute;
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      top: -10px;
      left: 15px;
      font-weight: bold;
      // padding: 1rem 1rem;
      background-color: $primary-bgcolor-2;
      border-radius: 100%;
    }
  }

  .sign-in-btn {
    padding: 1rem 2rem;
    background-color: transparent;
    border: 1px solid $color-white;
    color: $color-white;
    font-size: 1.6rem;
    font-weight: 700;
    transition: 0.2s ease;
    border-radius: 0.6rem;
    cursor: pointer;

    &:hover {
      background-color: $color-white;
      color: $primary-text-color;
    }
  }
}

.search {
  padding: 1rem 2rem;
  position: relative;
  display: flex;

  .searchbar-input {
    width: 100%;
    border: 3px solid $primary-bgcolor-1;
    border-right: none;
    padding: 15px 5px;
    height: 20px;
    border-radius: 5px 0 0 5px;
    outline: none;
    font-family: inherit;
    color: #9dbfaf;

    &:focus {
      color: $primary-bgcolor-1;
    }
  }

  .search-btn {
    width: 40px;
    height: 36px;
    border: 1px solid $primary-bgcolor-1;
    background: $primary-bgcolor-1;
    text-align: center;
    color: #fff;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    font-size: 20px;
  }
}

// .search {
//   margin-top: 1rem;
//   width: 90%;
//   display: flex;
//   justify-content: space-around;

//   .searchbar-input {
//     padding: 0.8rem;
//     border: 1px solid $primary-bgcolor-1;
//     border-radius: 5px;
//     position: relative;
//     width: 100%;

//     &:focus {
//       outline: none;
//     }
//   }

//   .search-btn {
//     position: absolute;
//     padding: 0.8rem 1.2rem;
//     background-color: $primary-bgcolor-2;
//     border: 1px solid $color-white;
//     color: $color-white;
//     font-size: 1.6rem;
//     font-weight: 700;
//     transition: 0.2s ease;
//     border-radius: 0.6rem;
//     cursor: pointer;
//     right: 40px;

//     &:focus {
//       outline: none;
//     }
//   }
// }
</style>
