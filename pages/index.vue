<template>
  <div>
    <Header></Header>
    <Recommendation></Recommendation>
    <Bestsellers></Bestsellers>
    <ForStudents></ForStudents>
    <AboutCarousel></AboutCarousel>
    <Under20></Under20>
    <JustArrived></JustArrived>
    <BookCategory></BookCategory>
  </div>
</template>

<script>
import Header from '~/components/HomeComponent/Header'
import Recommendation from '~/components/HomeComponent/Sections/Recommendation'
import Bestsellers from '~/components/HomeComponent/Sections/Bestsellers'
import ForStudents from '~/components/HomeComponent/Sections/ForStudents'
import AboutCarousel from '~/components/HomeComponent/AboutCarousel'
import Under20 from '~/components/HomeComponent/Sections/Under20'
import JustArrived from '~/components/HomeComponent/Sections/JustArrived'
import BookCategory from '~/components/HomeComponent/Sections/BookCategory'
export default {
  components: {
    Header,
    Recommendation,
    Bestsellers,
    ForStudents,
    AboutCarousel,
    Under20,
    JustArrived,
    BookCategory,
  },
}
</script>

<style lang="scss" scoped></style>
