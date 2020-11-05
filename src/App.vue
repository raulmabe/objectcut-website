<template>
  <div>
    <div class="columns is-centered mb-0">
      <div class="column is-multiline is-10  gapless">
        <Hero />
      </div>
    </div>

    <div class="columns mb-0 is-desktop is-vcentered  main-content">
      <div class="column ">
        <MidContent />
      </div>
    </div>

    <div class="columns is-gapless">
      <div class="column"><Footer /></div>
    </div>
  </div>
</template>

<script>
import MidContent from "./components/MidContent.vue";
import Footer from "./components/Footer.vue";
import Hero from "./components/Hero.vue";

export default {
  name: "App",
  title: "Image background removal",
  components: {
    Hero,
    MidContent,
    Footer,
  },
};
</script>

<style lang="scss">
@import "styles/bulma";

.main-content {
  min-height: 60vh;
}
</style>
