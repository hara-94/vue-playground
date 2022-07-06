<template>
  <div class="header">
    <ul class="header__list">
      <li class="header__item">
        <router-link to="/">TOP</router-link>
      </li>
      <li class="header__item">
        <router-link to="/csv">CSV</router-link>
      </li>
      <li class="header__item">
        <router-link to="/calc-vh">/calc-vh</router-link>
      </li>
      <li class="header__item">
        <router-link to="/life-cycle">/life-cycle</router-link>
      </li>
      <li class="header__item">
        <router-link to="/agora">/agora</router-link>
      </li>
      <li class="header__item">
        <router-link to="/dayjs">/dayjs</router-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class ComponentHeader extends Vue { }
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aquamarine;

  &__list {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  &__item {
    padding: 4px 10px;
    font-size: 0.9rem;
    line-height: 1;
  }
}
</style>
