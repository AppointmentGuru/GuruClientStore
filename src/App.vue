<template>
  <div id="app">
    <el-row>
      <el-col :span="24">
        <el-menu  mode="horizontal" >
          <el-menu-item index="1">
            AppointmentGuru Client Vuex Store
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <el-menu default-active="2" class="el-menu-vertical-demo" theme="dark">
          <el-menu-item index="1-1">Getting started</el-menu-item>
          <el-submenu index="1">
            <template slot="title">Mutations</template>
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
              <el-menu-item index="1-3">item three</el-menu-item>
          </el-submenu>
          <el-submenu index="1">
            <template slot="title">Actions</template>
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
              <el-menu-item index="1-3">item three</el-menu-item>
          </el-submenu>
          <el-submenu index="1">
            <template slot="title">Filters</template>
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
              <el-menu-item index="1-3">item three</el-menu-item>
          </el-submenu>
          <el-menu-item index="1-1">Raw data</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="18">
        <div class='content' >
          <img src="./assets/logo.png">

          <h3>Active state:</h3>
          <pre>{{state}}</pre>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    state () {
      return this.$gurustore.state
    }
  }
}
</script>

<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 1200px;
  margin-left:auto;margin-right:auto;
}
#app .content {
  padding:20px;
}
</style>
