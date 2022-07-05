<template>
  <div class="agora-top">
    <div class="agora-top__heading">
      Agora
      <router-link class="agora-top__heading__link" to="agora/audience">> Audience</router-link>
    </div>
    <div class="agora-top__me" id="me"></div>
    <div class="agora-top__buttons">
      <button class="agora-top__button agora-top__button--join" @click="onClickJoinAsHost">Join</button>
      <button class="agora-top__button" @click="onClickPlay">Play</button>
      <button class="agora-top__button" @click="onClickPublish">Publish</button>
      <button class="agora-top__button" @click="onClickUnpublish">Unpublish</button>
      <button class="agora-top__button agora-top__button--finish" @click="onClickLeave">Leave</button>
      <button class="agora-top__button" @click="onClickToggleCamera">ToggleCamera</button>
      <button class="agora-top__button" @click="onClickToggleAudio">ToggleAudio</button>
    </div>
    <div class="agora-top__buttons agora-top__buttons--rtm">
      <button class="agora-top__button" @click="onClickLoginRTM">LoginRTM</button>
      <button class="agora-top__button" @click="onClickJoinRTM">JoinRTM</button>
      <button class="agora-top__button" @click="onClickExitRTM">ExitRTM</button>
      <button class="agora-top__button" @click="onClickSendMessage">Send Message</button>
    </div>
  </div>  
</template>
<script lang="ts" src="./top.ts"></script>
<style lang="scss" scoped>
.agora-top {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__heading {
    width: 500px;
    font-size: 28px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    &__link {
      cursor: pointer;
      font-size: 12px;
    }
  }

  &__me {
    width: 500px;
    height: 500px;
    border: 3px solid lightgray;
  }

  &__buttons {
    display: flex;
    flex-wrap: wrap;

    &--rtm {
      margin-top: 16px;
    }
  }

  &__button {
    width: 200px;
    height: 30px;
    text-align: center;
    border: 2px dashed lightgray;

    &--join {
      border: 2px solid greenyellow;
      color: greenyellow;
    }

    &--finish {
      border: 2px solid red;
      color: red;
    }
  }
}
</style>