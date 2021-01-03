<template>
  <section class="switch_disp_radio">
    <input
      type="radio"
      name="disp_task_state_radio"
      id="task_all"
      value="all"
    />
    <label for="all">すべて</label>
    <input
      type="radio"
      name="disp_task_state_radio"
      id="task_mainte"
      value="mainte"
    />
    <label for="mainte">作業中</label>
    <input
      type="radio"
      name="disp_task_state_radio"
      id="task_complete"
      value="complete"
    />
    <label for="complete">完了</label>
  </section>
</template>

<script>
export default {
  name: "DispTaskRadio",
};
</script>

<style scoped>
label {
  padding-right: 10px;
}
</style>
