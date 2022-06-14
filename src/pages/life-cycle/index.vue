<template>
  <div class="">
    <div class="tab">
      <div class="tab__item">
        <input class="tab__item__radio" type="radio" name="component-selection" id="component-a" @click="onSelect('TemplateLifeCycleComponentA')">
        <label for="component-a">component-a</label>
      </div>
      <div class="tab__item">
        <input class="tab__item__radio" type="radio" name="component-selection" id="component-b" @click="onSelect('TemplateLifeCycleComponentB')">
        <label for="component-b">component-b</label>
      </div>
    </div>
    <div class="model-input">
        <input type="text" class="model-input__input" v-model="strModel">
    </div>
    <keep-alive>
      <component :is="component" :label="component" :strModel="strModel"></component>
    </keep-alive>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TemplateLifeCycleComponentA from "../../components/templates/life-cycle/components/A/component-a.vue";
import TemplateLifeCycleComponentB from "../../components/templates/life-cycle/components/B/component-b.vue";

@Component({
  components: {
    TemplateLifeCycleComponentA,
    TemplateLifeCycleComponentB
  }
})
export default class PageLifeCycleIndex extends Vue {
  private component: string = "";
  private strModel: string = "init";

  private onSelect(value: string) {
    this.component = value;
  }
}
</script>
<style lang="scss" scoped>
.tab {
  &__item {

    &__radio {
      all: revert;
    }
  }
}

.model-input {
  &__input {
    border: 1px solid lightgray;
  }
}
</style>