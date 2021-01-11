<template>
  <button>{{ action }}</button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    action: String,
  },
};
</script>

<style scoped></style>
