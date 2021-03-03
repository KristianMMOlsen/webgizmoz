<template>
  <div class="margin_top container">
    <nav class="navbar navbar-dark bg-dark row px-0 mx-0">
      <div class="row mx-auto">
        <h4 class="mx-auto col-12">Sosiale medier</h4>
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a class="nav-link col-6" href="https://twitter.com/twitter"
              >Twitter</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link col-6" href="https://www.facebook.com/"
              >Facebook</a
            >
          </li>
        </ul>
      </div>
      <div class="col-12">
        <h4 href="#">©WebGizmoz 2020</h4>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div,
a {
  color: white;
}
.margin_top {
  margin-top: 200px;
}
.container {
  max-width: 100%;
  margin: 0;
  padding: 0;
}
</style>