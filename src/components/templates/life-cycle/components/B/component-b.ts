import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class TemplateLifeCycleComponentB extends Vue {
  @Prop()
  private label!: string;
  @Prop()
  private strModel!: string;

  deactivate() {
    console.log("component-b deactivate")
  }

  beforeUpdate() {
    //deactivateのコンポーネントのbeforeUpdateは呼ばれない
    console.log("component-b before update")
  }
}