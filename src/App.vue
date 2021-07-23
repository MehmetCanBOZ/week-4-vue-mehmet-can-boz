<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./assets/sass/index.scss";
</style>
<script>
import Header from "./components/Header.vue"
export default {
  name: 'StarshipDetails',
  components:{
    Header
  }
}
</script>