<template>
  <div class="">
    <nav>
      <component-header></component-header>
    </nav>    
    <router-view></router-view>
  </div> 
</template>
<script lang="ts">
import { Vue, Component } from "../node_modules/vue-property-decorator";
import ComponentHeader from "./components/Header.vue";

@Component({
  components: {
    ComponentHeader
  }
})
export default class App extends Vue {}
</script>
<style lang="scss">
@import "./asset/css/reset.css";
</style>