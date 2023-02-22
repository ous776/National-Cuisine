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


<style scoped>

.nav {
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    padding: 15px 200px;
    background: #1F4542;
    justify-content: space-between;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  .nav, .nav .nav-links {
    display: flex;
    align-items: center;
    column-gap: 20px;
    list-style: none;
  }

  .nav a {
    color: #fff;
    text-decoration: none;
  }

  .nav .nav-links a {
    transition: all 0.2s linear;
  }

  .nav .logo {
    font-size: 22px;
    font-weight: 500px ;
  }

  .nav .search-icon {
    color: #fff;
    font-size: 20px;
    cursor: pointer;
  }

  .nav .search-box {
    position: absolute;
    right: 520px;
    height: 45px;
    max-width: 400px;
    width: 100%;
    pointer-events: auto;
    transition: all 0.2s linear;
  }

  .search-box  .search-icon {
    position: absolute ;
    left: 15px;
    top: 50%;
    right: 15px;
    transform: translate(-50%);
  }
  .search-box input {
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    border-radius: 6px;
    background-color: #fff;
    padding: 0 15px 0 45px;

  }

  .nav .navOpenBtn, .navCloseBtn, .search-icon {
    display: none;
  }

  /* Responsive */

  @media screen and (max-width:1160px) {
    .nav {
        padding: 15px 100px;
    }

    .nav .search-box {
        right: 150px;
    }
  }

  @media screen and (max-width:950px) {
    .nav {
        padding: 15px 20px;
    }

    .nav .search-box {
        right: 100px;
        
    }
  }

  
  @media screen and (max-width:768px) {

    .nav .navOpenBtn, .nav .navCloseBtn, .nav .search-icon{
        display: block;
    }
    .nav {
        padding: 15px 50px;
    }

    .nav .search-box {
        right: 250px;
        top: calc(100% + 10px);
        max-width: calc(100%-20px);
        transform: translate(50%);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .nav .nav-links {
        position: fixed;
        top: 0;
        left: 100%;
        height: 100%;
        max-width: 280px;
        width: 100%;
        padding-top: 100px;
        row-gap: 30px;
        flex-direction: column;
        background-color: #11101d;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        transition: all 0.4s ease;
        z-index: 100;
    }

    .nav .openNav .nav-links {
        left: 0;
    }

    .nav .navOpenBtn {
        color: #fff;
        font-size: 20px;
        cursor: pointer;
    }

    .nav .navCloseBtn {
        position: absolute;
        top: 20px;
        right: 20px;
        color: #fff;
        font-size: 20px;
        cursor: pointer;
    }
  }

</style>