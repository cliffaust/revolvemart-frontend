<template>
  <div>
    <div class="text">Shop By Categories</div>

    <ul class="category-list">
      <li class="category-item">
        <font-awesome-icon
          :icon="['fas', 'chevron-right']"
          class="icon"
        />Action & Adventure
      </li>
      <li class="category-item">
        <font-awesome-icon :icon="['fas', 'chevron-right']" class="icon" />Drama
      </li>
      <li class="category-item">
        <font-awesome-icon
          :icon="['fas', 'chevron-right']"
          class="icon"
        />Horror
      </li>
      <li class="category-item">
        <font-awesome-icon
          :icon="['fas', 'chevron-right']"
          class="icon"
        />Religious
      </li>
      <li class="category-item">
        <font-awesome-icon
          :icon="['fas', 'chevron-right']"
          class="icon"
        />Educational
      </li>
      <li class="category-item">
        <font-awesome-icon
          :icon="['fas', 'chevron-right']"
          class="icon"
        />Cooking
      </li>
      <li class="category-item">
        <font-awesome-icon
          :icon="['fas', 'chevron-right']"
          class="icon"
        />History
      </li>
      <li class="category-item">
        <font-awesome-icon :icon="['fas', 'chevron-right']" class="icon" />Crime
      </li>
      <li class="category-item">
        <font-awesome-icon
          :icon="['fas', 'chevron-right']"
          class="icon"
        />Science
      </li>
      <li class="category-item">
        <font-awesome-icon
          :icon="['fas', 'chevron-right']"
          class="icon"
        />Sci-fi
      </li>
      <li class="category-item">
        <font-awesome-icon
          :icon="['fas', 'chevron-right']"
          class="icon"
        />Romance
      </li>
      <li class="category-item">
        <font-awesome-icon
          :icon="['fas', 'chevron-right']"
          class="icon"
        />Finance & Business
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.text {
  display: block;
  padding: 0.8rem;
  margin-left: 0.6rem;
  position: relative;
  font-weight: 800;
  font-size: 2.1rem;

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

.category-list {
  margin-top: 1rem;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-left: 7px;

  .category-item {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    flex: 0 0 50%;

    .icon {
      width: 10px;
      height: 20px;
      margin-right: 0.6rem;
    }
  }
}
</style>
