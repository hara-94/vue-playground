<template>
  <div class="vue">
    <nav>
      <component-header></component-header>
    </nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </div> 
</template>
<script lang="ts">
import { Vue, Component } from "../node_modules/vue-property-decorator";
import ComponentHeader from "./components/header.vue";

@Component({
  components: {
    ComponentHeader
  }
})
export default class App extends Vue {}
</script>
<style lang="scss">
@import "./asset/css/reset.css";
.container {
  max-width: 810px;
  margin: 0 auto;
}
</style>