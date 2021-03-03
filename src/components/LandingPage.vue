<template>
  <div class="container">
    <div class="row mt-3">
      <img
        class="LPimg col-9 mx-auto"
        src="../assets/thinker.jpg"
        alt="Responsive image"
      />
    </div>
    <div class="row">
      <h1 class="col-12">
        Velkommen til WebGizmoz, hvor dine web-ideer og behov blir
        virkeliggjort!
      </h1>
    </div>
    <div class="row mt-3">
      <img
        class="LPimg col-9 mx-auto"
        src="../assets/tinker.jpg"
        alt="Responsive image"
      />
    </div>
    <div class="row">
      <h1 class="col-12">
        Ved hjelp av vår gode kompetanse, i tillegg til fremtidsrettet
        web-teknologi, hjelper vi deg med å utvikle alt fra apper til nettsider.
      </h1>
    </div>
    <div class="row mt-3">
      <img
        class="LPimg col-9 mx-auto"
        src="../assets/vue-logo.png"
        alt="Responsive image"
      />
    </div>
    <div class="row">
      <h1 class="col-12">
        Vi er stolte over å utvikle med Vue.js! Vue.js er et trygt og
        fremtidsrettet rammeverk for web-utvikling, slik at vi kan levere den
        perfekte løsningen for dine behov.
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 100%;
  padding: 0;
  margin-bottom: 200px;
}
.LPimg {
  width: 100%;
  height: auto;
}
</style>
