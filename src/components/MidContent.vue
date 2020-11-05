<template>
  <div>
    <div class="columns is-mobile is-centered">
      <div class="column is-8"><InputURL /></div>
    </div>
    <div class="columns is-centered is-vcentered ">
      <div class="column  has-text-centered">
        <MyImage :valid="isBaseValid" :url="baseURL" />
      </div>
      <div class="column is-narrow has-text-centered">
        <MagicButton />
      </div>
      <div class="column  has-text-centered">
        <MyImage :valid="isGeneratedValid" :url="generatedURL" />
      </div>
    </div>
  </div>
</template>

<script>
import MyImage from "./MyImage";
import InputURL from "./InputURL";
import MagicButton from "./MagicButton";

export default {
  name: "MidContent",
  components: {
    MyImage,
    InputURL,
    MagicButton,
  },
  computed: {
    baseURL() {
      return this.$store.getters.getBaseURL;
    },
    generatedURL() {
      return this.$store.getters.getGeneratedURL;
    },
    isGeneratedValid() {
      return this.$store.getters.isGeneratedURLValid;
    },
    isBaseValid() {
      return this.$store.getters.isBaseURLValid;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
