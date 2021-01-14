<template>
  <input
    type="text"
    :value="inptValue"
    @change="setInptTxt"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  name: "InptText",
  props: {
    placeholder: String,
    inptValue: String,
  },
  methods: {
    setInptTxt(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style scoped></style>
