<template>
  <div class="agora-top">
    <div class="agora-top__heading">Agora</div>
    <div class="agora-top__me" id="me"></div>
    <div class="agora-top__buttons">
      <button class="agora-top__button agora-top__button--start" @click="onClickLive">Start</button>
      <button class="agora-top__button agora-top__button--finish" @click="onClickLeave">Leave</button>
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
    font-size: 28px;
    font-weight: bold;
  }

  &__me {
    width: 500px;
    height: 500px;
    border: 3px solid lightgray;
  }

  &__buttons {
    display: flex;
    justify-content: center;
  }

  &__button {
    width: 100px;
    height: 30px;
    text-align: center;

    &--start {
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