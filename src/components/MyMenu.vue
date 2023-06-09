<template>
    <el-menu default-active="2" class="el-menu-vertical-demo" v-model="isCollapse" :collapse="isCollapse" @mouseover="fmouseover()" @mouseleave="fmouseleave()">
        <el-sub-menu index="1">
            <template #title>
                <el-icon>
                    <location />
                </el-icon>
                <span>Navigator One</span>
            </template>
            <el-menu-item-group>
                <template #title><span>Group One</span></template>
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
                <template #title><span>item four</span></template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="1-5">
                <template #title><span>item four</span></template>
                <el-menu-item index="1-5-1">item one</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="1-6">
                <template #title><span>item four</span></template>
                <el-menu-item index="1-6-1">item one</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="1-7">
                <template #title><span>item four</span></template>
                <el-menu-item index="1-7-1">item one</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="1-8">
                <template #title><span>item four</span></template>
                <el-menu-item index="1-8-1">item one</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <template #title>Navigator Two</template>
        </el-menu-item>
        <el-menu-item index="3" disabled>
            <el-icon>
                <document />
            </el-icon>
            <template #title>Navigator Three</template>
        </el-menu-item>
        <el-menu-item index="4">
            <el-icon>
                <setting />
            </el-icon>
            <template #title>Navigator Four</template>
        </el-menu-item>
    </el-menu>
</template>
  
<script setup>
import { ref } from 'vue'
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'

var isCollapse = ref(true)
const fmouseover = () => {
    isCollapse.value = false;
}
const fmouseleave = () => {
    isCollapse.value = true;
}

</script>
  
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>