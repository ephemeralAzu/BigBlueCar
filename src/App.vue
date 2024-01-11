<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderComp from './components/HeaderComp.vue';
import FooterComp from './components/FooterComp.vue';
</script>

<template>
  <HeaderComp/>
  <RouterView />
  <FooterComp class="footer"/>
</template>

<style scoped lang="scss">
.footer{
  margin-top: 150px;
  width: 96%;
}
</style>
