<template>
    <div>
      <h1>{{ cuisine }} cuisine details</h1>
      <!-- display cuisine details here -->
    </div>
    <Footer/> 
  </template>
  
  <script>
  import Footer from "./Footer.vue";

  export default {
    name: 'CuisineDetails',

    components: {
    Footer
  },

    props: {
      cuisine: {
        type: String,
        required: true
      }
    }
  }
  </script>
  