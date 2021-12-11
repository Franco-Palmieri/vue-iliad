<template>
  <div id="app">
    <router-link to="/home"/>
    <router-link to="/meal/:id"
    />
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios"
import Home from '@/views/Home'
import Meal from '@/views/Meal'

export default {
  name: 'App',
  components:{
    Home,
    Meal
  },
  data(){
    return{
      meals: []
    }
  },
  mounted(){

  },
  methods:{
    getIdMeals(){
      
    }
  }
}
</script>

<style lang="scss">

</style>
