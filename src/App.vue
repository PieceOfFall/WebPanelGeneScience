<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderView from '@/views/layout/HeaderView.vue';


</script>

<template>
  <div id="main-container">
    <el-container>
      <el-header height="4rem">
        <HeaderView />
      </el-header>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
#main-container {
  height: 100%;

  .el-container {
    height: 100%;

    .el-header {
      padding: 0;
    }

    .el-main {
      padding: 0;
      height: calc(100% - 4rem);
    }
  }
}
</style>
