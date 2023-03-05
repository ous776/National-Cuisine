<template>
  <Header />

  <div class="header">
    <h1>Discovering the Top 3 National Cuisines</h1>
    <p>
      This website is dedicated to showcasing the culinary diversity of
      countries around the world. It highlights the three most famous national
      cuisines of each country, offering a glimpse into the rich cultural
      heritage of each region. Whether you are a foodie, a traveler, or simply
      someone who loves trying new things, this website has something for
      everyone.
    </p>
  </div>
  <div class="container">
    <div v-for="country in getPaginatedData()" :key="country">
      <p class="list" @click="toggleFoodList(country)">{{ country.country }}</p>
      <div class="foodlist" :class="{ show: country.showFoodList }">
        <div class="food">
          <ul>
            <li
              @click="toggleCuisine(country, value)"
              v-for="value in country.cuisine"
              :key="value"
            >
              {{ value }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div id="app">
    <Pagination
      :total-pages="totalPages"
      :current-page="currentPage"
      @pagechanged="onPageChange"
    />
  </div>
  <br />
  <br />
  <Footer />
</template>

<script>
import countries from "../countries.json";
import Pagination from "./Pagination.vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  name: "CountryList",

  components: {
    Header,
    Pagination,
    Footer,
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

    toggleFoodList(country) {
      country.showFoodList = !country.showFoodList;

      this.countries.forEach((c) => {
        if (c !== country) {
          c.showFoodList = false;
        }
      });
    },

    toggleCuisine(country, cuisine) {
      this.$router.push(`/${country.country}/${cuisine}`);

      this.$router.push({
        name: "cuisine-details",
        params: {
          country: country,
          cuisine: cuisine,
        },
      });
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
  margin: 15px 50px 0 51px;
  border: none;
  padding: 30px 100px;
  width: 680px;
  text-align: center;
  background-color: #467a75;
  border-radius: 6px 6px 0 0;
  color: #fff;
  cursor: pointer;
}

a {
  cursor: pointer;
}

.pagination {
  justify-content: center;
  flex-wrap: wrap;
}

.foodlist {
  display: none;
}

.foodlist.show {
  display: block;
}

.food ul {
  align-items: center;
  display: flex;
}

.food ul li {
  list-style: none;
  display: inline;
  margin-left: 51px;
  margin-right: 43.5px;
  background-color: #467a75;
  color: #fff;
  text-align: center;
  padding: 12px 0;
  border-top: 3px solid;
  border-top-color: black;
  border-radius: 0 0 6px 6px;
  width: 163.5px;
}
</style>