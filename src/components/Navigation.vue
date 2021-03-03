<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link to="../" class="navbar-brand">
        <img
          src="../assets/logo2.png"
          width="70"
          height="50"
          class="d-inline-block align-top"
          alt=""
          loading="lazy"
        />
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="../views/" class="nav-link">Hjem</router-link>
          </li>
          <li class="nav-item">
            <router-link to="../views/tjenester" class="nav-link"
              >Tjenester</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="../views/kontakt" class="nav-link"
              >Kontakt oss</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="../views/om" class="nav-link"
              >Om WebGizmoz</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigation",
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>