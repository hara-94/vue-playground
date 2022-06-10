<template>
  <div class="calc-vh">
    <template-modal v-if="isShowModal" @on-click-overlay="hideModal"></template-modal>
    <button class="calc-vh__button" @click="showModal">showModal</button>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import TemplateModal from "../../components/modal.vue";

@Component({
  components: {
    TemplateModal
  }
})
export default class PageCalcVhIndex extends Vue {
  private isShowModal: boolean = false;

  private showModal() {
    this.isShowModal = true;
  }

  private hideModal() {
    this.isShowModal = false;
  }
}
</script>
<style lang="scss" scoped>
.calc-vh {
  display: flex;
  justify-content: center;
  align-items: center;

  &__button {
    margin-top: 30px;
    width: 100px;
    height: 40px;
    text-align: center;
    background-color: aquamarine;
  }
}
</style>