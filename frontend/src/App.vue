<template>
  <div id="app">
    <v-header ></v-header>
    <div class="md-layout md-gutter">
      <div class="md-layout-item">
        <v-button></v-button>
      </div>
        <v-kube-vis></v-kube-vis>
    </div>
  </div>
</template>

<script>
  import Header from "Components/Header";
  import Button from "Components/Button";
  import Visualizations from "Components/Visualizations";
  
  export default {
    name: "app",
    components: {
      "v-header": Header,
      "v-button": Button,
      "v-kube-vis": Visualizations,

    },
    methods: {}
  };
</script>

<style lang="scss">
</style>
