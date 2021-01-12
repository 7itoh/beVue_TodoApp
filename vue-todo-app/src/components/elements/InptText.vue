<template>
  <input type="text" v-model="innerSearchText" :placeholder="placeholder" />
</template>

<script>
export default {
  name: "InptText",
  props: {
    placeholder: String,
    inptValue: String,
  },
  computed: {
    innerSearchText: {
      get() {
        return this.$props.inptValue;
      },
      set(newInptValue) {
        this.$emit("input", newInptValue);
      },
    },
  },
};
</script>

<style scoped></style>
