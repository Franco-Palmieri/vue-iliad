<template>
  <div>
    <Header />
    <Main :meals="meals" />
    <Footer />
  </div>
</template>

<script>
import axios from "axios"
import Header from "@/components/Header.vue"
import Main from "@/components/Main.vue"
import Footer from "@/components/Footer.vue"


export default {
  name: 'Home',
  components: {
    Header,
    Main,
    Footer
  },
  data(){
    return {
      meals: [],
    }
  },
  mounted(){
    this.getMeals();
  },
  methods: {
    getMeals(){
      axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood").then((response) => {
            this.meals = response.data.meals
            console.log(this.meals)
      });
    },
  }
}
</script>

<style lang="scss">

</style>
