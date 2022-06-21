import { Component, Vue } from "vue-property-decorator";
import AgoraRTC from "agora-rtc-sdk";

@Component({})
export default class TemplateAgoraAudience extends Vue {
  private appId = "32244dd041404db2ade6878d192c7b69";
  private client = AgoraRTC.createClient({
    mode: "live",
    codec: "vp8"
  });



  mounted() {
    this.client.init(this.appId, () => {
      console.log("client init success");
    });

  }

  private onClickHandleEvent() {
    this.client.on("liveStreamingStarted", (evt: { type: "liveStreamingStarted", url: string}) => {
      console.log("liveStreamingStarted");
      console.log("url: " + evt.url);
    });

    this.client.on("liveStreamingStopped", (evt: { type: "liveStreamingStopped", url: string }) => {
      console.log("liveStreamingStopped");
      console.log("url: " + evt.url);
    });

    this.client.on("stream-added", (evt: any) => {
      console.log("stream-added");
    })

    this.client.on("stream-subscribed", (evt: any) => {
      console.log("stream-subscribed");
    })
  }

  private onClickJoinAsAudience() {
    this.client.join(null, "sample-live", null, undefined, (uid: number) => {
      console.log("join success")
      this.client.setClientRole("audience");
    }, (err: string) => {
      console.log("join failed: " + err);
    })
  }
}