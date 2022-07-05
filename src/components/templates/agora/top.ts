import { Vue, Component } from "vue-property-decorator";
import AgoraRTC, { ICameraVideoTrack, IMicrophoneAudioTrack } from "agora-rtc-sdk-ng";
import AgoraRTM, { RtmMessage } from "agora-rtm-sdk";

@Component({})
export default class TemplateAgoraTop extends Vue {
  private appId = "32244dd041404db2ade6878d192c7b69";
  private tempToken = "006d44c5a0166b34b8282e8808316bec0efIABpGhxGk8uafjkxMOelLusiKlRXw93Eov+8EWDlZ7iBt029K2wAAAAAEACXhJCZ1EqxYgEAAQDUSrFi"
  private client = AgoraRTC.createClient({
    mode: "live",
    codec: "vp8"
  });
  private cameraTrack = AgoraRTC.createCameraVideoTrack();
  private audioTrack = AgoraRTC.createMicrophoneAudioTrack();
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
    this.client.setClientRole("host");
    this.client.join(this.appId, "sample-live", null, null).then((value: any) => {
      console.log("join success");
    });
  }

  private onClickLeave() {
    console.log("leave")
    this.client.leave().then(() => {
      console.log("leave success")
    });
  }

  private onClickPlay() {
    console.log("play")
    this.cameraTrack.then((track: ICameraVideoTrack) => {
      track.play("me")
    })
  }

  private onClickPublish() {
    console.log("publish")
    this.cameraTrack.then((track: ICameraVideoTrack) => {
      return this.client.publish(track);
    }).then(() => {
      console.log("publish success");
    })
  }

  private onClickUnpublish() {
    console.log("unpublish")
    this.cameraTrack.then((track: ICameraVideoTrack) => {
      return this.client.unpublish(track);
    }).then(() => {
      console.log("unpublish success");
    })
    
  }

  private onClickToggleCamera() {
    this.cameraTrack.then((track: ICameraVideoTrack) => {
      track.setMuted(!this.isVideoMute);
      this.isVideoMute = !this.isVideoMute;  
    });  
  }

  private onClickToggleAudio() {
    this.audioTrack.then((track: IMicrophoneAudioTrack) => {
      track.setMuted(!this.isAudioMute);
      this.isAudioMute = !this.isAudioMute;
    });
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