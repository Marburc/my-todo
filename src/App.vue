<template>
  <div id="app">
    <app-header></app-header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Header from "./components/Header.vue";

export default {
  components: {
    "app-header": Header,
    "app-home": Home
  }
};
</script>


<style >
#app {
  font-family: "Work Sans", sans-serif;
  background-color: bisque;
  height: 100vh;
}
</style>
