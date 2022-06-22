<template>
  <div class="audience-top">
    <div class="audience-top__video-container" id="container">

    </div>
    <div class="audience-top__buttons">
      <button class="audience-top__buttons__button" @click="onClickHandleEvent">Handle Event</button>
      <button class="audience-top__buttons__button" @click="onClickJoinAsAudience">Join as Audience</button>
    </div>
  </div>
</template>
<script lang="ts" src="./audience.ts"></script>
<style lang="scss" scoped>
.audience-top {
  width: 100%;

  &__video-container {
    display: block;
    width: 70%;
    height: 400px;
    margin: 0 auto;
    border: 2px solid lightgray
  }

  &__buttons {
    width: 100%;
    display: flex;
    justify-content: left;

    &__button {
      width: 200px;
      height: 40px;
      border: 2px dashed lightgray;
      text-align: center;
    }
  }
}
</style>