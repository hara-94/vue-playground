<template>
  <div class="modal">
    <div class="modal__overlay" @click="onClickOverlay">
      <div class="modal__body">
        <div class="modal__header">
          modal__header
        </div>
        <div class="modal__container">
          <div class="modal__buttons">
            <button class="modal__button" @click="onClickHeight(false)">log outerHeight</button>
            <button class="modal__button" @click="onClickHeight(true)">log innerHeight</button>
          </div>
          <div class="modal__log-area">{{ logText }}</div>
          <div class="modal__space"></div>
        </div>
        <div class="modal__footer">
            modal__footer
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Emit } from "vue-property-decorator";

const setFillHeight = () => {
  const vh = window.innerHeight * 0.01;
  console.log(vh);
  document.documentElement.style.setProperty('--appVh', `${vh}px`);
}

let vw = window.innerWidth;

window.addEventListener('resize', () => {
  if (vw === window.innerWidth) {
  // 画面の横幅にサイズ変動がないので処理を終える
    return;
  }

  // 画面の横幅のサイズ変動があった時のみ高さを再計算する
  vw = window.innerWidth;
  setFillHeight();
});

// 初期化
setFillHeight();

@Component({})
export default class ComponentModal extends Vue {
  private logText: string = "";

  private onClickHeight(isInner: boolean) {
    if (isInner) {
      const height = window.innerHeight;
      this.logText = `innerHeight: ${height}`;
    } else {
      const height = window.outerHeight;
      this.logText = `outerHeight: ${height}`;
    }
  }

  @Emit()
  private onClickOverlay() {}
}
</script>
<style lang="scss">
.modal {
  width: 100vw;
  height: calc(var(--appVh, 1vh) * 100);
  position: absolute;
  top: 0;
  z-index: 9999;

  &__overlay {
    width: 100%;
    height: calc(var(--appVh, 1vh) * 100);
    background-color: rgba(0, 0, 0, .5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__body {
    width: 50%;
    height: auto;
    background-color: aquamarine;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__header {
    padding: 4px 10px;
    font-size: 22px;
  }

  &__container {
    width: 100%;
    max-height: calc(var(--appVh, 1vh) * 90);
    padding: 0 10px;
    background-color: white;
    overflow-y: scroll;
  }

  &__buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__button {
    width: 80%;
    height: 40px;
    background-color: aquamarine;
    margin-top: 20px;
    text-align: center;
  }

  &__log-area {
    width: 90%;
    height: 100px;
    margin: 0 auto;
    border: 1px dashed aquamarine;
    margin-top: 20px;
    font-size: 20px;
  }

  &__space {
    width: 100%;
    height: 1000px;
  }
}
</style>