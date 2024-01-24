<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderComp from './components/HeaderComp.vue';
import FooterComp from './components/FooterComp.vue';
</script>
<script lang="ts">
export default {
    data() {
      return {
        header: true
      }
    },methods: {
      reloadHeader(){
        this.header = false
        this.header = true
      }
    },
}


</script>
<template>
  <HeaderComp />
  <RouterView @reloadHeader="reloadHeader()"/>
  <FooterComp class="footer"/>
</template>

<style scoped lang="scss">
.footer{
  margin-top: 150px;
  width: 96%;
}
</style>
