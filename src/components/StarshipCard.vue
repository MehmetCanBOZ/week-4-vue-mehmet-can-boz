<template>
    <div @click="goDetail(starship.url,starship.name)" class="card">
        <h2>{{starship.name}}</h2>
        <div class="content-item" >
          <div class="pic">
              <a><img src="../assets/images/starship.png" alt="logo"></a>
          </div>
        </div>
        <p>Model: <b>{{starship.model}}</b></p>
        <p>Hyperdrive Rating: <b>{{starship.hyperdrive_rating}}</b></p>
    </div>
</template>

<script>
export default {
  name: 'StarshipCard',
  props:[
     "starship"
  ],
  methods: {
    goDetail(url,name) {
      this.$router.push({ name: 'StarshipDetail', query: {url: url.split("/")[5]}, params: {name:name } });
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>