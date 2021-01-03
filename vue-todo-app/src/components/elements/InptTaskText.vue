<template>
  <input class="input_new_task" type="text" :placeholder="inptActGuide" />
</template>

<script>
export default {
  name: "InptTaskText",
  props: {
    inptActGuide: String,
  },
};
</script>

<style scoped></style>
