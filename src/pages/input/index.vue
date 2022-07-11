<template>
  <div class="input">
    <template-input-top></template-input-top>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TemplateInputTop from "../../components/templates/input/top.vue";

@Component({
  components: {
    TemplateInputTop
  }
})
export default class PageInputIndex extends Vue {}
</script>
