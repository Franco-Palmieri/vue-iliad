<template>
  <div>
    <Header />
    <Main :meal="meal"/>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Main from "@/components/Main.vue"
import Footer from "@/components/Footer.vue"
import axios from "axios"


export default {
  name: 'Meal',
  components: {
    Header,
    Main,
    Footer
  },
  data(){
      return{
          meal: []
      }
  },
  mounted(){
      this.getMealSearch()
  },
  methods:{
      getMealSearch(){
          axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + this.$route.params.id).then((response)=>{
            this.meal = response.data.meals
            console.log(this.meal)
        });
      }
  }
  

}
</script>

<style lang="scss">

</style>
