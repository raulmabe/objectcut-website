<template>
  <div class="flex flex-col justify-evenly items-center ">
    <InputURL />
    <div
      class="flex flex-row flex-wrap flex-grow w-full justify-center items-center "
    >
      <MyImage
        :valid="isBaseValid"
        :url="baseURL"
        class="w-full md:w-auto mx-5"
      />
      <MagicButton class="w-full md:w-auto mx-5" />
      <MyImage
        :valid="isGeneratedValid"
        :url="generatedURL"
        class="w-full md:w-auto mx-5"
      />
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
