<script setup lang="ts">
</script>

<template>
<section class="find_section">
<h1>Поездки на ваш выбор по самым низким ценам</h1>
<div class="inputs">
    <div class="from"><input type="text"></div>
    <div class="to"><input type="text"></div>
    <div class="date"><input type="date"></div>
    <div class="count"><input type="number"></div>
    <button>Поиск</button>
</div>
</section>

</template>

<style scoped lang="scss">
.find_section{
   background-image: url("https://cdn.blablacar.com/kairos/assets/images/carpool_coral_bus_large-78022c0488061d145a65.svg");
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
   height: 15vw;
}
.inputs{
    display: flex;
    justify-content: center;
}
</style>