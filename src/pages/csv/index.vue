<template>
  <div class="csv">
    <template-csv-top></template-csv-top>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TemplateCsvTop from "../../components/templates/csv/top.vue";

@Component({
  components: {
    TemplateCsvTop
  }
})
export default class PageCsvIndex extends Vue {}
</script>
