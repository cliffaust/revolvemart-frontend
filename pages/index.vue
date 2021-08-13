<template>
  <div>
    <!-- <NavbarSlider></NavbarSlider> -->
    <Header></Header>
    <Recommendation></Recommendation>
    <Bestsellers :best-sellers="bestSellers"></Bestsellers>
    <ForStudents :students="students"></ForStudents>
    <AboutCarousel></AboutCarousel>
    <UnderPrice :under-price="underPrice"></UnderPrice>
    <JustArrived :arrived="arrived"></JustArrived>
    <SpecialPicks></SpecialPicks>
    <BookCategory></BookCategory>
    <Footer></Footer>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

import Header from '~/components/HomeComponent/Header'
// import NavbarSlider from '~/components/DefaultComponent/navbarSlider.vue'
import Recommendation from '~/components/HomeComponent/Sections/Recommendation'
import Bestsellers from '~/components/HomeComponent/Sections/Bestsellers'
import ForStudents from '~/components/HomeComponent/Sections/ForStudents'
import AboutCarousel from '~/components/HomeComponent/AboutCarousel'
import UnderPrice from '~/components/HomeComponent/Sections/UnderPrice'
import JustArrived from '~/components/HomeComponent/Sections/JustArrived'
import BookCategory from '~/components/HomeComponent/Sections/BookCategory'
import SpecialPicks from '~/components/HomeComponent/Sections/SpecialPicks'
import Footer from '~/components/HomeComponent/Footer'
export default {
  components: {
    Header,
    Recommendation,
    Bestsellers,
    ForStudents,
    AboutCarousel,
    UnderPrice,
    JustArrived,
    BookCategory,
    SpecialPicks,
    Footer,
    // NavbarSlider,
  },

  async asyncData() {
    const response1 = await axios.get(`${process.env.baseUrl}/books/?page=2`)
    const response2 = await axios.get(`${process.env.baseUrl}/books/?page=3`)
    const response3 = await axios.get(`${process.env.baseUrl}/books/?page=6`)
    const response4 = await axios.get(`${process.env.baseUrl}/books/?page=5`)
    return {
      arrived: response1.data.results,
      students: response2.data.results,
      bestSellers: response3.data.results,
      underPrice: response4.data.results,
    }
  },

  async fetch({ store, error }) {
    try {
      await store.dispatch('Books/getBooks/getBooks')
    } catch (e) {
      error({ statusCode: 503 })
    }
  },

  computed: {
    ...mapState({
      navbarSlider: (state) => state.navbarSlider,
    }),
  },
}
</script>

<style lang="scss" scoped></style>
