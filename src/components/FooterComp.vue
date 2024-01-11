<script setup lang="ts">
</script>
<script>

</script>

<template>
    <footer>
        <h1>Популярные маршруты совместных поездок</h1>
        <div class="routes_list">
            <h3>Москва → Санкт-Петербург</h3>
            <h3>Челябинск → Екатеринбург</h3>
            <h3>Санкт-Петербург → Москва</h3>
            <h3>Тольятти → Самара</h3>
            <h3>Екатеринбург → Челябинск</h3>
            <h3>Барнаул → Новосибирск</h3>
        </div>
    </footer>

</template>

<style scoped lang="scss">
footer{
    background-color: #cfcece;
    display: flex;
    flex-direction: column;
    padding: 0 2%;
    h1{
        color: #23272e;
        font-family: "Exo 2";  
    }
    h3{
        color: #23272e;
        font-family: "Exo 2"; 
    }
    .routes_list{
        display: flex;
        justify-content: space-between;
    }
}
</style>