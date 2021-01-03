<template>
  <button class="input_new_task">{{ action }}</button>
</template>

<script>
export default {
  name: "AddTaskBtn",
  props: {
    action: String,
  },
};
</script>

<style scoped></style>
