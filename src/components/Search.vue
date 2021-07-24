<template>
    <div class="wrapper">
        <div class="search">
            <img src="../assets/images/search-icon.svg" alt="search">
            <input type="text" placeholder="Search Starship Name or Model" @change="searchResult"  v-model="search">
        </div>
    </div>
</template>

<script>

export default {
  name: 'Search',
  data(){
      return{
          search:"",
      };
  },
   methods: {
      searchResult(e){
          
      }
   },
   watch:{
       search:function(val){
           const timer =setTimeout(()=>{
             this.$store.dispatch('loadItems',val)
             },500)
            return ()=> clearTimeout(timer);
       }
   }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>