<template>
  <div>
    <!-- components og routes -->
    <Navigation></Navigation>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>



<script>
//imports for components
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navigation,
    Footer,
  },
  data() {
    return {
      Techs: [
        {
          navn: "Vue",
          bilde: "../assets/vue-logo.png",
          link: "https://getbootstrap.com/",
          forklaring:
            "Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.",
        },
        {
          navn: "Bootstrap",
          bilde: "../assets/bootstrap-logo.png",
          link: "https://v3.vuejs.org/",
          forklaring:
            "Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins. ",
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
