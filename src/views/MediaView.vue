<script setup lang="ts">
import {
    TrophyBase,
    DocumentCopy,
    PieChart,
    OfficeBuilding
} from '@element-plus/icons-vue'
import router from '@/router';

</script>

<template>
    <div id="main-container">
        <el-menu id="menu" unique-opened>
            <!-- 非凡历程 -->
            <el-sub-menu index="1">
                <template #title>
                    <el-icon>
                        <TrophyBase />
                    </el-icon>
                    <span>非凡历程展区</span>
                </template>
                <el-menu-item index="1-1" @touchend="router.push({ name: 'historyProjector' })"
                    @click="router.push({ name: 'historyProjector' })">
                    投影仪
                </el-menu-item>
                <el-menu-item index="1-2" @touchend="router.push({ name: 'historyEntrance' })"
                    @click="router.push({ name: 'historyEntrance' })">
                    门禁
                </el-menu-item>
            </el-sub-menu>
            <!-- 创新研发 -->
            <el-sub-menu index="2">
                <template #title>
                    <el-icon>
                        <DocumentCopy />
                    </el-icon>
                    <span>创新研发展区</span>
                </template>
                <el-menu-item index="2-1" @touchend="router.push({ name: 'innovationScreen' })"
                    @click="router.push({ name: 'innovationScreen' })">
                    技术平台大屏
                </el-menu-item>
                <el-menu-item index="2-2" @touchend="router.push({ name: 'pipelineAio' })"
                    @click="router.push({ name: 'pipelineAio' })">
                    研发管线一体机
                </el-menu-item>
                <el-menu-item index="2-3" @touchend="router.push({ name: 'cooperationAio' })"
                    @click="router.push({ name: 'cooperationAio' })">
                    合作生态一体机
                </el-menu-item>
            </el-sub-menu>
            <!-- 多元业务 -->
            <el-sub-menu index="3">
                <template #title>
                    <el-icon>
                        <PieChart />
                    </el-icon>
                    <span>多元业务展区</span>
                </template>
                <el-menu-item index="3-1" @touchend="router.push({ name: 'businessScreen' })"
                    @click="router.push({ name: 'businessScreen' })">
                    生长激素大屏
                </el-menu-item>
                <el-menu-item index="3-2" @touchend="router.push({ name: 'tumourAio' })"
                    @click="router.push({ name: 'tumourAio' })">
                    肿瘤一体机
                </el-menu-item>
                <el-menu-item index="3-3" @touchend="router.push({ name: 'weightAio' })"
                    @click="router.push({ name: 'weightAio' })">
                    体重管理一体机
                </el-menu-item>
                <el-menu-item index="3-4" @touchend="router.push({ name: 'feetAio' })"
                    @click="router.push({ name: 'feetAio' })">
                    足脊健康一体机
                </el-menu-item>
                <el-menu-item index="3-5" @touchend="router.push({ name: 'femaleAio' })"
                    @click="router.push({ name: 'femaleAio' })">
                    女性健康一体机
                </el-menu-item>
                <el-menu-item index="3-6" @touchend="router.push({ name: 'skinAio' })"
                    @click="router.push({ name: 'skinAio' })">
                    皮肤医美一体机
                </el-menu-item>
                <el-menu-item index="3-7" @touchend="router.push({ name: 'neuroAio' })"
                    @click="router.push({ name: 'neuroAio' })">
                    儿童神经一体机
                </el-menu-item>
                <el-menu-item index="3-8" @touchend="router.push({ name: 'immunityAio' })"
                    @click="router.push({ name: 'immunityAio' })">
                    内分泌&风湿免疫一体机
                </el-menu-item>
            </el-sub-menu>
            <!-- 产业运营 -->
            <el-sub-menu index="4">
                <template #title>
                    <el-icon>
                        <OfficeBuilding />
                    </el-icon>
                    <span>产业运营展区</span>
                </template>
                <el-menu-item index="4-1" @touchend="router.push({ name: 'operationScreen' })"
                    @click="router.push({ name: 'operationScreen' })">
                    生产基地大屏
                </el-menu-item>
            </el-sub-menu>
        </el-menu>

        <div id="content">
            <RouterView />
        </div>

    </div>
</template>

<style lang="scss" scoped>
#main-container {
    height: 100%;
    display: flex;

    #menu {
        height: 100%;
        width: 15rem;
    }

    #content {
        height: 100%;
        width: calc(100% - 15rem);
    }
}
</style>