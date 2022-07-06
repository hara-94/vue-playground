<template>
  <template-dayjs-top></template-dayjs-top>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TemplateDayjsTop from "../../components/templates/dayjs/top.vue";

@Component({
  components: {
    TemplateDayjsTop
  }
})
export default class PageDayjsIndex extends Vue {

}
</script>
