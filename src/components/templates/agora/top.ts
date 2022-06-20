import { Vue, Component } from "vue-property-decorator";
import AgoraRTC from "agora-rtc-sdk";
import AgoraRTM, { RtmMessage } from "agora-rtm-sdk";

@Component({})
export default class TemplateAgoraTop extends Vue {
  private appId = "32244dd041404db2ade6878d192c7b69";
  private tempToken = "006d44c5a0166b34b8282e8808316bec0efIABpGhxGk8uafjkxMOelLusiKlRXw93Eov+8EWDlZ7iBt029K2wAAAAAEACXhJCZ1EqxYgEAAQDUSrFi"
  private client = AgoraRTC.createClient({
    mode: "live",
    codec: "vp8"
  });
  private localStream = AgoraRTC.createStream({
    audio: true,
    video: true
  });
  private rtmClient = AgoraRTM.createInstance(this.appId);

  private isVideoMute: boolean = false;
  private isAudioMute: boolean = false;

  get rtmChannel() {
    return this.rtmClient.createChannel("rtm-channel");
  }

  mounted() {
    console.log("mounted");
    this.rtmChannel.on("ChannelMessage", (message: RtmMessage, memberId: string) => {
      const remoteMessage = message.description;
      console.log("description: " + remoteMessage)
    })
  }

  private onClickJoinAsHost() {
    this.client.init(this.appId, (() => {
      this.setClientRole();
    }));
    this.client.join(this.tempToken, "sample-live", null, undefined, (uid: number) => {
      console.log("join success");
    });
  }

  private onClickLeave() {
    console.log("leave")
    this.client.leave((() => {
      console.log("leave success");
    }));
  }

  private onClickPlay() {
    console.log("play")
    this.localStream.init(() => {
      console.log("stream init success");
      this.localStream.play("me")
    }, (err: any) => {
      this.handleError("play", "error");
    })
  }

  private onClickPublish() {
    console.log("publish")
    this.client.publish(this.localStream, (err: string) => {
      this.handleError("publish", err);
    });
  }

  private onClickUnpublish() {
    console.log("unpublish")
    this.client.unpublish(this.localStream, (err: string) => {
      this.handleError("unpublish", err);
    });
  }

  private onClickToggleCamera() {
    if (this.isVideoMute) {
      this.localStream.unmuteVideo();
    } else {
      this.localStream.muteVideo();
    }
    this.isVideoMute = !this.isVideoMute;    
  }

  private onClickToggleAudio() {
    if (this.isAudioMute) {
      this.localStream.unmuteAudio();
    } else {
      this.localStream.muteAudio();
    }
    this.isAudioMute = !this.isAudioMute;
  }

  private setClientRole() {
    this.client.setClientRole("host");
  }

  private handleError = (domain: string, err: any) => {
    console.log(domain + ", error: " + err);
  }

  private onClickLoginRTM() {
    const uid = Math.random().toString(32).substring(2);
    this.rtmClient.login({ uid }).then(() => {
      console.log("rtm login success");
    });
  }

  private onClickJoinRTM() {
    this.rtmChannel.join().then(() => {
      console.log("rtm join success");
    })
  }

  private onClickExitRTM() {
    this.rtmChannel.leave().then(() => {
      console.log("rtm leave success")
      return this.rtmClient.logout();
    }).then(() => {
      console.log("rtm logout success")
    });
  }

  private onClickSendMessage() {
    this.rtmChannel.sendMessage({ text: "this is message" }).then(() => {
      console.log("rtm sendMessage success")
    }, (reason: any) => {
      console.log("failed send message");
    })
  }
}