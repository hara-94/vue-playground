<template>
  <template-agora-audience></template-agora-audience>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TemplateAgoraAudience from "../../../components/templates/agora/audience/audience.vue";

@Component({
  components: {
    TemplateAgoraAudience
  }
})
export default class PageAgoraAudience extends Vue {

}
</script>