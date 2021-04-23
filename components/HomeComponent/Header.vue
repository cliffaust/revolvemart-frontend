<template>
  <div class="header">
    <NavBar></NavBar>
    <SearchBar></SearchBar>
  </div>
</template>

<script>
import NavBar from '~/components/DefaultComponent/navbar'
import SearchBar from '~/components/DefaultComponent/searchBar'
export default {
  components: {
    NavBar,
    SearchBar,
  },
}
</script>

<style lang="scss" scoped>
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
</style>
