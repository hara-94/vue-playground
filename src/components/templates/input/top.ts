import { Vue, Component } from "vue-property-decorator";

type Chat = {
  id: string
  text: string
}

@Component({})
export default class TemplateInputTop extends Vue {
  private currentId: number = 0;
  private text: string = "";
  private chats: Chat[] = [];

  private isComposing: boolean = false;
  
  private onKeyDownEnter() {
    console.log("onKeyDownEnter")
    if (this.isComposing) {
      return;
    }
    if (this.text === "") {
      console.log(1)
      return;
    }
    if (!this.text.match(/\S/g)) {
      console.log(2)
      return;
    }
    this.send();
  }

  private onKeyDownShiftEnter() {
    console.log("onKeyDownShiftEnter")
  }

  private onKeyPressEnter() {
    console.log("onKeyPressEnter")
  }

  private send() {
    console.log("send")
    const input = document.getElementById("chat-input");
    input?.blur();
    
    const chat: Chat = {
      id: `${this.currentId}`,
      text: this.text
    }
    this.chats.push(chat);
    this.currentId += 1;
    this.text = "";
  }
}
