<template>
<div class="pagination">
  <div>
    <button :disabled="previous===null" @click="PreviousPage()">❮</button>
    <button :disabled="next===null" @click="NextPage()">❯</button>
  </div>
</div>
</template>

<script>
import { mapState} from 'vuex';
export default {
  name: 'Pagination',
  methods:{
    PreviousPage(){
       this.$store.dispatch('loadPreviousItems'); 
       console.log("previos");
    },
    NextPage(){
      this.$store.dispatch('loadNextItems');
      console.log("next"); 
    }
  },
  computed:{
    ...mapState([
        'previous',
        'next'
    ])
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>