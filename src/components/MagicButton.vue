<template>
  <div class="flex flex-col items-center my-5 ">
    <span
      class="btn btn-primary"
      v-bind:class="{ 'is-loading': loading, disabled: !valid }"
      v-on:click="submitURL"
      :disabled="!valid"
    >
      Magic ✨
    </span>
    <div>
      <strong class="gradient-text"> 98%</strong>
      success rate
    </div>
  </div>
</template>

<script>
export default {
  name: "MagicButton",
  computed: {
    loading() {
      return this.$store.getters.isLoading;
    },
    valid() {
      return this.$store.getters.isBaseURLValid;
    },
  },
  methods: {
    submitURL() {
      this.$store.dispatch("magic");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a.is-disabled {
  background-color: grey !important;
}
</style>
