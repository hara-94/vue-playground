import { Component, Vue } from "vue-property-decorator";
import AgoraRTC, { IAgoraRTCRemoteUser, IRemoteVideoTrack } from "agora-rtc-sdk-ng";

@Component({})
export default class TemplateAgoraAudience extends Vue {
  private appId = "32244dd041404db2ade6878d192c7b69";
  private client = AgoraRTC.createClient({
    mode: "live",
    codec: "vp8"
  });

  mounted() {
    
  }

  private onClickHandleEvent() {
    this.client.on("user-published", (user: IAgoraRTCRemoteUser, mediaType: "audio" | "video") => {
      console.log("user-published, mediaType=" + mediaType);
      console.log(user.videoTrack);
      if (mediaType === "video") {
        this.client.subscribe(user, mediaType).then((track: IRemoteVideoTrack) => {
          track.play("remote-stream")
        });
      }
    });
  }

  private onClickJoinAsAudience() {
    this.client.setClientRole("audience");
    this.client.join(this.appId, "sample-live", null, null).then(() => {
      console.log("join success");
    });
  }

  private addVideoBlock(id: string) {
    console.log("addVideBlock")
    const block = document.createElement("div");
    block.id = id;
    block.style.transform = "rotateY(180deg)";
    block.style.width = "100%";
    block.style.height = "100%";
    document.getElementById("container")?.appendChild(block);
  }
}