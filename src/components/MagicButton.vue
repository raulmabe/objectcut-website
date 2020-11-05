<template>
  <div class="has-text-centered">
    <div class="mb-1">
      <a
        class="button is-primary"
        v-bind:class="{ 'is-loading': loading, 'is-disabled': !valid }"
        v-on:click="submitURL"
        :disabled="!valid"
      >
        Magic ✨
      </a>
    </div>
    <div>
      <strong class="has-text-primary"> 94%</strong>
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
