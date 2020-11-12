<template>
  <div class="flex flex-col items-center my-5 ">
    <span v-if="valid">
      <img :src="url" class="h-64 w-64 rounded object-contain" />
    </span>

    <span v-else class="skeleton h-64 w-64 rounded"> </span>
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
