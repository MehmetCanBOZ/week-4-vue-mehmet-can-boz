<template>
    <div class="breadcrump">
        <div class="breadcrump-link">
            <span id="home" @click="goHome()">Home</span>
            <span>/</span>
            <span>{{name}}</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Spinner',
  props:[
      "name"
  ],
  methods: {
    goHome(){
         this.$router.push({name: 'Home'});
    }  
  },
}
</script>
<style scoped lang="scss">
</style>
