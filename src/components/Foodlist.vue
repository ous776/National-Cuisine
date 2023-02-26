<template>
    <div class="food">
<ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
</ul>
    </div>
</template>

<script>

export default {
    name: "Foodlist"
}

</script>

<style scoped>
.food ul {
    align-items: center;
    display: flex;
}

.food ul li {
    list-style: none;
    display: inline;
    margin-left: 51px;
    margin-right: 43.5px;
    background-color: #467A75;
    color: #fff;
    padding: 20px 65px 10px 65px;
    border-top: 3px solid;
    border-top-color: black;
    border-radius: 0 0 6px 6px;
   
}

</style>