<template>
  <input type="text" :placeholder="placeholder" />
</template>

<script>
export default {
  name: "InptText",
  props: {
    placeholder: String,
  },
};
</script>

<style scoped></style>
