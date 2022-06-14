import { Vue, Component } from "vue-property-decorator";
import AgoraRTC from "agora-rtc-sdk";

@Component({})
export default class TemplateAgoraTop extends Vue {
  private appId = "d44c5a0166b34b8282e8808316bec0ef";
  private tempToken = "006d44c5a0166b34b8282e8808316bec0efIABhfwQ+5TzGnpJ33fxxijJFVEP7UqXzvPIShxotaplJgk29K2wAAAAAEAC5bVGzIZ2pYgEAAQAhnali"
  private client = AgoraRTC.createClient({
    mode: "live",
    codec: "vp8"
  });
  private localStream = AgoraRTC.createStream({
    audio: true,
    video: true
  });

  private onClickLive() {
    this.client.init(this.appId);
    this.client.join(this.tempToken, "sample-live", null, undefined, () => {

    }, (err: string) => {
      
    });
  }
}