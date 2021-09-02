<template>
  <div>
    <div class="text">Shop By Categories</div>

    <ul class="category-list">
      <li class="category-item">
        <font-awesome-icon :icon="['fas', 'circle']" class="icon" />
        <div class="text-category">Action & Adventure</div>
      </li>
      <li class="category-item">
        <font-awesome-icon :icon="['fas', 'circle']" class="icon" />
        <div class="text-category">Drama</div>
      </li>
      <li class="category-item">
        <font-awesome-icon :icon="['fas', 'circle']" class="icon" />
        <div class="text-category">Horror</div>
      </li>
      <li class="category-item">
        <font-awesome-icon :icon="['fas', 'circle']" class="icon" />
        <div class="text-category">Religious</div>
      </li>
      <li class="category-item">
        <font-awesome-icon :icon="['fas', 'circle']" class="icon" />
        <div class="text-category">Educational</div>
      </li>
      <li class="category-item">
        <font-awesome-icon :icon="['fas', 'circle']" class="icon" />
        <div class="text-category">Cooking</div>
      </li>
      <li class="category-item">
        <font-awesome-icon :icon="['fas', 'circle']" class="icon" />
        <div class="text-category">History</div>
      </li>
      <li class="category-item">
        <font-awesome-icon :icon="['fas', 'circle']" class="icon" />
        <div class="text-category">Crime</div>
      </li>
      <li class="category-item">
        <font-awesome-icon :icon="['fas', 'circle']" class="icon" />
        <div class="text-category">Science</div>
      </li>
      <li class="category-item">
        <font-awesome-icon :icon="['fas', 'circle']" class="icon" />
        <div class="text-category">Sci-fi</div>
      </li>
      <li class="category-item">
        <font-awesome-icon :icon="['fas', 'circle']" class="icon" />
        <div class="text-category">Romance</div>
      </li>
      <li class="category-item">
        <font-awesome-icon :icon="['fas', 'circle']" class="icon" />
        <div class="text-category">Finance & Business</div>
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
  font-size: 2.5rem;
  font-family: $secondary-font-1;
  margin-top: 1.5rem;

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
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: 7px;

  .category-item {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    flex: 0 0 50%;
    padding: 0 0.5rem;

    .text-category {
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .icon {
      width: 10px;
      height: 20px;
      margin-right: 0.6rem;
      // margin-top: -3px;
    }
  }
}
</style>
