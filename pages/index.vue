<template>
  <div>
    <Header></Header>
    <Recommendation></Recommendation>
    <Bestsellers></Bestsellers>
    <ForStudents></ForStudents>
    <AboutCarousel></AboutCarousel>
  </div>
</template>

<script>
import Header from '~/components/HomeComponent/Header'
import Recommendation from '~/components/HomeComponent/Sections/Recommendation'
import Bestsellers from '~/components/HomeComponent/Sections/Bestsellers'
import ForStudents from '~/components/HomeComponent/Sections/ForStudents'
import AboutCarousel from '~/components/HomeComponent/AboutCarousel'
export default {
  components: {
    Header,
    Recommendation,
    Bestsellers,
    ForStudents,
    AboutCarousel,
  },
}
</script>

<style lang="scss" scoped></style>
