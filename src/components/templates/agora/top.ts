import { Vue, Component } from "vue-property-decorator";
import AgoraRTC from "agora-rtc-sdk";

@Component({})
export default class TemplateAgoraTop extends Vue {
  private appId = "d44c5a0166b34b8282e8808316bec0ef";
  private tempToken = "006d44c5a0166b34b8282e8808316bec0efIAAyy2vxU75B851kVH24IvmqEleJH1yqcjF8snJkd4ZhOE29K2wAAAAAEAC5bVGz6+SqYgEAAQDp5Kpi"
  private client = AgoraRTC.createClient({
    mode: "live",
    codec: "vp8"
  });
  private localStream = AgoraRTC.createStream({
    audio: true,
    video: true
  });

  private async onClickLive() {
    this.initClient().then(() => {
      this.setClientRole();
      return this.joinChannel();
    }).then(() => {
      this.initLocalStream();
    });
  }

  private onClickLeave() {
    console.log("onClickLeave")
    this.client.leave();
  }

  private handleError = (domain: string, err: any) => {
    console.log(domain + ", error: " + err);
  }

  private async initClient() {
    console.log("initClient")
    return new Promise((resolve) => {
      this.client.init(this.appId, () => {
        resolve("");
      }, (err: string) => {
        this.handleError("initClient", err);
      });
    });
  }

  private setClientRole() {
    console.log("setClientRole")
    this.client.setClientRole("host");
  }

  private async joinChannel() {
    console.log("joinChannel")
    return new Promise((resolve) => {
      this.client.join(this.tempToken, "sample-live", null, undefined, (uid: number) => {
        resolve("");
      }, (err: string) => {
        this.handleError("joinChannel", err);
      });
    });
  }

  private async initLocalStream() {
    console.log("initLocalStream")
    return new Promise((resolve) => {
      this.localStream.init(() => {
        this.localStream.play("me");
        this.client.publish(this.localStream, (err: string) => {
          this.handleError("publish", err);
        });
        resolve("");
      });
    })
  }
}