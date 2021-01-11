<template>
  <input type="text" v-model="inptVal" :placeholder="placeholder" />
</template>

<script>
export default {
  name: "InptText",
  data() {
    return {
      inptVal: "",
    };
  },
  props: {
    placeholder: String,
  },
};
</script>

<style scoped></style>
