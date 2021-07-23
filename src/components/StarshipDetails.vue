<template>
    <div v-if="starship">
      <Breadcrump :name="starship.name"/>
        <div class="starship" >
              <div class="content-item" >
          <div class="pic">
              <a><img src="../assets/images/starship.png" alt="logo"></a>
          </div>
        </div>
         <div class="starship__info">
            <h2>{{ starship.name }}</h2>
            <p>Model: <b>{{ starship.model }}</b></p>
           
            <p>Starship Class: <b>{{ starship.starship_class }}</b></p>
            
            <p>Passenger: <b>{{ starship.name }}</b></p>
            <p>Max Speed: <b>{{ starship.max_atmosphering_speed }}</b></p>
            <p>Manufacturer: <b>{{ starship.manufacturer }}</b></p>
            <p>Crew: <b>{{ starship.crew }}</b></p>
            <p>Capacity: <b>{{ starship.cargo_capacity }}</b></p>
             
         </div>
    </div>
     </div>
    <div v-else>
      <Spinner/>
    </div>
</template>

<script>
import Spinner from "../components/Spinner.vue";
import Breadcrump from "../components/BreadCrump.vue";
import axios from 'axios';
export default {
  components: { Spinner,Breadcrump },
  name: 'StarshipDetails',
  data(){
      return{
          starship:null,
      };
  },
  methods: {
      fetchStarship() {
      axios
        .get(`https://swapi.dev/api/starships/${this.$route.query.url}`)
        .then((response) => (this.starship = response.data));
    },
  },
  created(){
    this.fetchStarship();
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


</style>