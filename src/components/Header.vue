<template>
      <nav class="nav">
        <i class="uil uil-bars navOpenBtn"></i>
        <a href="#" class="logo">National Cuisine</a>

        <ul class="nav-links">
            <i class="uil uil-times navCloseBtn"></i>
            <li><a href="#">TUTORIALS</a></li>
            <li><a href="#">STUDENT</a></li>
            <li><a href="#">JOBS</a></li>
            <li><a href="#">COURSES</a></li>
        </ul>

        <i class="uil uil-search search-icon" id="searchIcon"></i>

        <div class="search-box">
            <input type="text" placeholder="Search here....">
        </div>
    </nav>
</template>

<script>
import * as script from '../assets/script.js';

export default {
    name: 'Header',

   
}

</script>


<style>

</style>