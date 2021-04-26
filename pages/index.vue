<template>
  <div>
    <Header></Header>
    <Recommendation></Recommendation>
    <Bestsellers></Bestsellers>
    <ForStudents></ForStudents>
  </div>
</template>

<script>
import Header from '~/components/HomeComponent/Header'
import Recommendation from '~/components/HomeComponent/Sections/Recommendation'
import Bestsellers from '~/components/HomeComponent/Sections/Bestsellers'
import ForStudents from '~/components/HomeComponent/Sections/ForStudents'
export default {
  components: {
    Header,
    Recommendation,
    Bestsellers,
    ForStudents,
  },
}
</script>

<style lang="scss" scoped></style>
