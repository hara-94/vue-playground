<template>
  <div class="header">
    <ul class="header__list">
      <li class="header__item">
        <router-link to="/">TOP</router-link>
      </li>
      <li class="header__item">
        <router-link to="/csv">CSV</router-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default class ComponentHeader extends Vue { }
</script>
<style lang="scss" scoped>
.header {
  &__list {
    display: flex;
  }

  &__item {
    
  }
}
</style>