<template>
  <div class="component-a">
    <p class="component-a__label">{{ label }}</p>
    <p class="component-a__str-model">{{ strModel }}</p>
  </div>
</template>
<script lang="ts" src="./component-a.ts"></script>
<style lang="scss" scoped>
.component-a {
  width: 600px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__label {
    font-size: 20px;
    color: aquamarine;
  }
}
</style>