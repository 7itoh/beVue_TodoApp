<template>
  <fieldset>
    <label v-for="(option, index) in options" :key="index">
      <input
        type="radio"
        :name="name"
        :value="option.value"
        :checked="option.checked"
        @change="updateRadioValue"
      />{{ option.label }}
    </label>
  </fieldset>
</template>

<script>
export default {
  name: "RadioButton",
  props: {
    value: { type: String, required: true },
    options: { type: Array, required: true },
    name: { type: String, required: true },
  },
  methods: {
    updateRadioValue(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style scoped>
label {
  padding-right: 10px;
}
</style>
