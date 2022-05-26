import SampleJson from "../../../asset/json/sample.json";

import { Vue, Component } from "vue-property-decorator";

class TemplateSampleJson {
  name: string;
  type: string;
  ary: {
    num: number;
    isEven?: boolean;
  }[]

  constructor(name: string, type: string, ary: { num: number, isEven?: boolean }[]) {
    this.name = name;
    this.type = type;
    this.ary = ary;
  }
}

@Component({})
export default class TemplateCsvTop extends Vue {
  private executeStr(str: string) {
    console.log("log: " + str);
  }
  private checkType() {
    console.log("checkType");

    const sampleJson = SampleJson
    const hoge: any = 20;
  }
}