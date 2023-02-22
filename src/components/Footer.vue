
<template>
  <footer>
    <ul class="footer">
      <li class="nav-item">
        <a href="#" class="nav-link">Home</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">comment</a>
      </li>

      <li class="nav-item">
        <a href="#" class="nav-link">About</a>
      </li>
    </ul>
    <br><br>
    <p class="copy">&copy; 2021 Company, Inc</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  color: #fff;
  background: #1F4542;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
}


.footer,
.footer .nav-item {
  display: inline;
  column-gap: 20px;
  list-style: none;
  margin: 0 15px 0 15px;
  
}


.footer a {
  
  text-align:center;
  color: #fff;
  text-decoration: none;
}
</style>