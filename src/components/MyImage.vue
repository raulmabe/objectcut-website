<template>
  <div>
    <span v-if="valid">
      <img v-bind:src="url" />
    </span>
    <span v-else>
      <b-skeleton
        position="is-centered"
        height="200px"
        width="200px"
      ></b-skeleton>
    </span>
  </div>
</template>

<script>
export default {
  name: "MyImage",
  props: {
    url: String,
    valid: Boolean,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  height: 200px;
  width: 200px;
  object-fit: contain;
}
b-skeleton {
  display: block;
}
</style>
