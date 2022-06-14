<template>
  <div class="component-b">
    <p class="component-b__label">{{ label }}</p>
    <p class="component-a__str-model">{{ strModel }}</p>
  </div>
</template>
<script lang="ts" src="./component-b.ts"></script>
<style lang="scss" scoped>
.component-b {
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