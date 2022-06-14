import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class TemplateLifeCycleComponentA extends Vue {
  @Prop()
  private label!: string;
  @Prop()
  private strModel!: string;

  deactivate() {
    console.log("component-a deactivate")
  }

  beforeUpdate() {
    console.log("component-a before update")
  }
}