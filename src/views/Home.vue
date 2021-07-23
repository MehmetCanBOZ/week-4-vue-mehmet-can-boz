<template>
  <div class="home">
    <Search/>
    <StarshipList />
  </div>
</template>

<script>
import Search from '../components/Search.vue';
import StarshipList from '../components/StarshipList.vue'
export default {
  name: 'Home',
  components: {
   StarshipList,
   Search
  }
}
</script>
<style scoped lang="scss">
@import '../assets/sass/base/variables';
</style>