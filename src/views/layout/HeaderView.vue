<script setup lang="ts">
import router from '@/router';

</script>

<template>
    <div id="main-container">
        <div id="button-group">
            <el-button round @touchend="router.push('/device')" @click="router.push('/device')">
                设备开关
            </el-button>
            <el-button round @touchend="router.push('/media')" @click="router.push('/media')">
                媒体控制
            </el-button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#main-container {
    position: relative;
    height: 100%;
    padding: 0;
    margin: 0;
    background-color: rgb(102.2, 177.4, 255);
    border-bottom: solid 1px lightblue;

    #button-group {
        position: absolute;
        right: 1rem;
        line-height: 4rem;

        .el-button {
            font-size: 1rem;
        }
    }
}
</style>