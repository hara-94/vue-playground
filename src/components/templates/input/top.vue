<template>
  <div class="input-top">
    <div class="input-top__chat">
      <p class="input-top__chat__heading">Chat</p>
      <ul class="input-top__chat__list">
        <li
          v-for="chat in chats"
          :key="chat.id"
          class="input-top__chat__list__item"
        >
          {{ chat.text }}
        </li>
      </ul>
      <textarea 
        v-model="text"
        id="chat-input"
        class="input-top__chat__input"
        @compositionstart="isComposing=true"
        @compositionend="isComposing=false"
        @keydown.exact.enter.prevent="onKeyDownEnter"
        @keydown.enter.shift="onKeyDownShiftEnter"
      ></textarea>
    </div>
  </div>
</template>
<script lang="ts" src="./top.ts"></script>
<style lang="scss" scoped src="./top.scss"></style>
