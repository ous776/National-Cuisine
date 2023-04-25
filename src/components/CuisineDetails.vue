<template>
  <div>
    <h1>{{ cuisine }}</h1>
    <div>
      <h2>{{ cuisineName }}</h2>
      <p>{{ description }}</p>
      <h3>Ingredients:</h3>
      <ul>
        <li v-for="(ingredient, index) in ingredients" :key="index">
          {{ ingredient }}
        </li>
      </ul>
      <h3>Preparing:</h3>
      <ol>
        <li v-for="(step, index) in preparing" :key="index">
          {{ step }}
        </li>
      </ol>
    </div>
  </div>
  <Footer />
</template>
  
  <script>
import Footer from "./Footer.vue";

export default {
  name: "CuisineDetails",

  components: {
    Footer,
  },

  props: {
    cuisine: {
      type: String,
      required: true,
    },
  },
};
</script>
  