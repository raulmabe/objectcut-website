<template>
  <div class="flex flex-col w-11/12 md:w-1/3">
    <div class="flex flex-row flex-grow">
      <p class="flex flex-grow " :class="{ 'text-danger': hasErrored }">
        Insert your RapidAPI Key
      </p>
    </div>

    <input
      class="form-input text-gray-900 mb-8"
      v-model="key"
      @input="changeKey"
    />

    <div class="flex flex-row flex-grow">
      <p class="flex flex-grow " :class="{ 'text-danger': hasErrored }">
        {{ getMessage() }}
      </p>
      <p :class="{ 'text-danger': !valid, 'text-primaryLight': valid }">
        {{ valid ? "Valid" : "Invalid" }}
      </p>
    </div>

    <input
      class="form-input text-gray-900 mb-8"
      v-model="url"
      @input="changeURL"
    />

    <div class="block">
      <p>To remove</p>
      <select
        class="form-select text-gray-900 mb-8"
        v-model="toRemove"
        @change="changeToRemove"
      >
        <option value="background" selected>background</option>
        <option value="foreground">foreground</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "RawImg",
  data() {
    return {
      url: "",
      key: "",
      toRemove: "background",
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
    changeURL(event) {
      console.log(`This url is ${this.url}`);
      this.$store.commit("setBaseURL", this.url);
    },
    changeKey(event) {
      this.$store.commit("setKey", this.key);
    },
    changeToRemove(event) {
      this.$store.commit("setToRemove", this.toRemove);
    },
  },
};
</script>
