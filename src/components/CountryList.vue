<template>
  <div class="header">
  <h1>Discovering the Top 3 National Cuisines</h1>
  <p>
    This website is dedicated to showcasing the culinary diversity of countries
    around the world. It highlights the three most famous national cuisines of
    each country, offering a glimpse into the rich cultural heritage of each
    region. Whether you are a foodie, a traveler, or simply someone who loves
    trying new things, this website has something for everyone.
  </p>
</div>
  <div class="container">
    <div v-for="country in getPaginatedData()" :key="country">
      <p class="list">{{ country.country }}</p>
      <Foodlist/>
    </div>
  </div>

  <div id="app">
    <Pagination
      :total-pages="totalPages"
      :current-page="currentPage"
      @pagechanged="onPageChange"
    />
  </div>
</template>

<script>
import countries from "../countries.json";
import Pagination from "./Pagination.vue";
import Foodlist from "./Foodlist.vue";

export default {
  name: "CountryList",

  components: {
    Pagination,
    Foodlist
  },

  data() {
    return {
      countries,
      currentPage: 1,
      perPage: 10,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.countries.length / this.perPage);
    },
  },

  methods: {
    onPageChange(page) {
      this.currentPage = page;
    },
    getPaginatedData() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.countries.slice(start, end);
    },
  },
};
</script>

<style scoped>
.header {
  margin-top: 100px;
  text-align: center;
}
.container {
  margin-top: 30px;
  display: grid;
  place-items: center;
}

.list {
  /* margin: 15px 30px; */
  margin: 15px 30px 0 51px;
  border: none;
  padding: 30px 100px;
  width: 680px;
  text-align: center;
  background-color: #467A75;
  border-radius: 6px 6px 0 0;
  color: #fff;
}

a {
  cursor: pointer;
}
.pagination {
  justify-content: center;
  flex-wrap: wrap;
}
</style>