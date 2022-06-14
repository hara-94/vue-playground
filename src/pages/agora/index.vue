<template>
  <template-agora-top></template-agora-top>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import TemplateAgoraTop from "../../components/templates/agora/top.vue";

@Component({
  components: {
    TemplateAgoraTop
  }
})
export default class PageAgoraIndex extends Vue { }
</script>
