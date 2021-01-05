<template>
  <label :for="id">
    <input
      type="radio"
      :name="name"
      :id="id"
      :value="value"
      :checked="checked"
    />
    {{ action }}</label
  >
</template>

<script>
export default {
  name: "RadioButton",
  props: {
    name: String,
    id: String,
    value: String,
    action: String,
    checked: String,
  },
};
</script>

<style scoped>
label {
  padding-right: 10px;
}
</style>
