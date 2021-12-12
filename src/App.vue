<template>
  <div id="app">
    <router-link to="/home"/>
    <router-link to="/meal/:id"
    />
    <router-view></router-view>
  </div>
</template>

<script>
import Home from '@/views/Home'
import Meal from '@/views/Meal'

export default {
  name: 'App',
  components:{
    Home,
    Meal
  }
}
</script>

<style lang="scss">
@import "./style/app.scss"
</style>
