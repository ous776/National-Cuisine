

<template>
  <Header />
 <CountryList/>

 
</template>

<script >
import Header from "./components/Header.vue";
import CountryList from "./components/CountryList.vue"

export default {
  name: "App",

  components: {
    Header,
    CountryList
  },

};
</script>

<style scoped>
</style>
