<template>
  <section id="app">
    <section class="column header_title">
      <h1>Todoリスト</h1>
    </section>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import "../node_modules/bulma/bulma.sass";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 20px;
}
.header_title {
  font-size: 25px;
}
</style>
