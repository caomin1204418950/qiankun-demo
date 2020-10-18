<template>
  <div>
    <el-menu :router="true" mode="horizontal">
      <el-menu-item index="/">main-home</el-menu-item>
      <el-menu-item index="/music">music</el-menu-item>
      <el-menu-item index="/resume">resume</el-menu-item>
    </el-menu>
    <router-view />
    <div id="music"></div>
    <div id="resume"></div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
