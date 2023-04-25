<template>
  <div>
    <CuisineDetails
      :description="cuisine.description"
      :ingredients="cuisine.Ingredients.split('/')"
      :preparing="cuisine.preparing.split('/')"
      :cuisine-name="cuisineName"
    />
  </div>
</template>

<script>
import CuisineDetails from "./components/CuisineDetails.vue";

export default {
  name: "Cuisine",
  components: {
    CuisineDetails,
  },
  props: {
    cuisine: {
      type: Object,
      required: true,
    },
    cuisineName: {
      type: String,
      required: true,
    },
  },
};
</script>
