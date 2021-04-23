<template>
  <div class="search">
    <input
      type="text"
      placeholder="Search Revolvemart"
      class="searchbar-input"
    />
    <button class="search-btn">
      <font-awesome-icon :icon="['fas', 'search']" class="shopping-cart-icon" />
    </button>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
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
</style>
