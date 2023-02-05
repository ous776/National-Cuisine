<template>
<div class="container">
  <div v-for="country in getPaginatedData()" :key="country">
  <p class="list">{{ country.country }}</p>
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
import countries from "../countries.json"
import Pagination from "./Pagination.vue"

export default {
  name: "CountryList",


components: {
    Pagination
},

data() {
    return {
      countries,
      currentPage: 1,
      perPage: 10
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
  }
}

};
</script>

<style scoped>

.container {
    margin-top:70px;
    margin-left:20px;
}

.list {
    margin: 15px 30px;
    border: solid 1px;
    padding: 20px 30px;
    width: 600px;
}

a { cursor: pointer; }
        .pagination {
           justify-content: center;
           flex-wrap: wrap;
        }

</style>