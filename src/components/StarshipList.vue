<template >
    <div>
      <div class="cards" v-if="cardList">
         <StarshipCard  v-for="(item,index) in cardList" :key="index" :starship="item"
          />
      </div>
      <div v-else>
           <Spinner/>
      </div>
      <Pagination/>
    </div>
     
</template>


<script>
import StarshipCard from '../components/StarshipCard.vue';
import Spinner from "../components/Spinner.vue";
import Pagination from "./Pagination.vue";
import { mapState} from 'vuex';
export default {
  components: { StarshipCard, Spinner,Pagination },
  name: 'StarshipList',
    computed: {
    // mix the getters into computed with object spread operator
    ...mapState([
        'cardList'
    ])
  },
  methods: {
      
  },
  mounted () {
        this.$store.dispatch('loadItems')
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
