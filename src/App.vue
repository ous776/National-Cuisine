

<template>
  <Header />
 <CountryList/>
 <Footer/>

 
</template>

<script >
import Header from "./components/Header.vue";
import CountryList from "./components/CountryList.vue";
import Footer from "./components/Footer.vue"

export default {
  name: "App",

  components: {
    Header,
    CountryList,
    Footer
  },

};
</script>

<style scoped>
</style>
