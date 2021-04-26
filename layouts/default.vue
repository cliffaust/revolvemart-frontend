<template>
  <div>
    <Nuxt />
  </div>
</template>

<style lang="scss">
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

.noSelect {
  -webkit-tap-highlight-color: transparent;
  user-select: none;
}

body {
  font-family: $primary-font;
  color: $primary-text-color;
}
</style>
