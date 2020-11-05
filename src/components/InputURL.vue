<template>
  <div>
    <b-field
      v-bind:label="getMessage()"
      :custom-class="{ 'has-text-danger': hasErrored }"
      v-bind:type="{ 'is-primary': valid }"
    >
      <b-input :value="url" @input="changeURL"> </b-input>
    </b-field>
  </div>
</template>

<script>
export default {
  name: "RawImg",
  data() {
    return {
      url: "",
    };
  },
  computed: {
    valid() {
      return this.$store.getters.isBaseURLValid;
    },
    hasErrored() {
      return this.$store.getters.hasErrored;
    },
    getErrorMessage() {
      return this.$store.getters.getErrorMessage;
    },
  },
  methods: {
    getMessage() {
      if (this.hasErrored) {
        return this.getErrorMessage;
      }

      return this.$store.getters.isBaseURLValid
        ? "Cool one 👍🏼 !"
        : "Insert a valid image URL";
    },
    changeURL(url) {
      this.url = url;
      this.$store.commit("setBaseURL", this.url);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$success: red;
</style>
