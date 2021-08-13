<template>
  <div></div>
</template>

<script>
export default {
  async fetch() {
    const { store } = this.$nuxt.context
    await store.commit('signin/LOGOUT')
  },
  fetchOnServer: false,
}
</script>

<style lang="scss" scoped></style>
