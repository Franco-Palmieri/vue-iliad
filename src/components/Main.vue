<template>
      <main>
        <div class="container">
          <div class="row" v-if="!isHome" >
             <div class="col-12">
               <h4>Menu:</h4>
             </div>
             <div class="card-deck d-flex">

                 <router-link class="route-link col-sm-12 col-md-6 col-lg-4" :to="{ name: 'meal', params: { id : item.idMeal } }"
                  v-for="(item, index) of meals" :key="index">
                    <div class="card-container">
                      <div class="card">
                        <img class="card-img-top" :src="item.strMealThumb" alt="Card image cap">
                        <div class="card-body">
                          <h6 class="card-title">{{item.strMeal}}</h6>
                        </div>
                      </div>
                    </div>
                </router-link>
               
               <!-- <MealCard v-for="(element, index) in meals" :key="index"
                :mId="element.idMeal"
                :name="element.strMeal"
                :img="element.strMealThumb"
               /> -->

               <!--- TO DO provare ad usare componente mealcard con router-link --->

             </div>
          </div>
          <div class="row" v-else>
            <div class="col-12">
              <SingleMeal v-for="(element, index) in meal" :key="index"
              :id="element.idMeal"
              :name="element.strMeal"
              :img="element.strMealThumb"
              :category="element.strCategory"
              :area="element.strArea"
              :instructions="element.strInstructions"
              />
            </div>
          </div>
        </div>
      </main>
</template>

<script>

import MealCard from "./MealCard.vue"
import SingleMeal from "./SingleMeal.vue"

export default {
  name: 'Main',
  components: {
      MealCard,
      SingleMeal
  },
  props: {
    meals: Array,
    meal: Array
  },
  computed:{
    isHome() {
            return this.$route.name !== 'home'
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
main{
  color: #000;
  padding: 100px;
  .card-deck{ 
    flex-wrap: wrap;
    .route-link{
      text-decoration: none;
      color: #000;
      .card-container{
        padding: 15px;
      }
    }
  }
  
}
</style>
