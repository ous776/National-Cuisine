<template>
  <div id="app">
    
    <nav>
      <ul class="pagination">
        <li class="pagination-item" v-if="currentPage > 1">
          <a class="page-link" href="#" @click.prevent="$emit('pagechanged', currentPage - 1)">Previous</a>
        </li>
        <li class="pagination-item" v-for="page in totalPages" :key="page">
          <a class="page-link" href="#" @click.prevent="$emit('pagechanged', page)">{{ page }}</a>
        </li>
        <li class="pagination-item" v-if="currentPage < totalPages">
          <a class="page-link" href="#" @click.prevent="$emit('pagechanged', currentPage + 1)">Next</a>
        </li>
      </ul>
    </nav>
  
  </div>
</template>
  
  <script>
 

  export default {

    name: 'Pagination',
  
    props: {
   
    totalPages: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
  },



 };


  </script>

  <style scoped>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.pagination {
  list-style-type: none;
}

.pagination-item {
  display: inline-block;
}

.active {
  background-color: #4aae9b;
  color: #ffffff;
}
</style>
  