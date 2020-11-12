<template>
  <div class="grid grid-nav-main-footer h-screen w-screen overflow-auto bg-gray-200 text-gray-700">
    <Hero/>
    <MidContent />
   <Footer />
  </div>
</template>

<script>
import MidContent from "./components/MidContent.vue";
import Footer from "./components/Footer.vue";
import Hero from "./components/Hero.vue";

export default {
  name: "App",
  title: "UI ObjectCut",
  components: {
    Hero,
    MidContent,
    Footer,
  },
};
</script>

<style src="@/styles/app.css">
