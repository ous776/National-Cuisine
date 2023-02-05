<template>
      <nav class="nav">
        <font-awesome-icon icon="fa-solid fa-bars" class="navOpenBtn" />
       
        <a href="#" class="logo">National Cuisine</a>

        <ul class="nav-links">
            <i class="navCloseBtn"></i>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
        </ul>
       
        <font-awesome-icon icon="fa-solid fa-search" class="search-icon" id="searchIcon" />
        <div class="search-box">
            <input type="text" placeholder="Search here....">
        </div>
    </nav>


</template>

<script>
import * as script from '../assets/script.js';

export default {
    name: 'Header',

    // components: {
    //     script
    // }

    // mounted() {
    //     script
    // }

   
}

</script>


<style>

</style>