<template>
      <main>
        <div class="container">
          <div class="row">
             <div class="col-12">Menu:</div>
             <div class="card-deck d-flex">
               <MealCard v-for="(element, index) in meals" :key="index"
                :id="element.idMeal"
                :name="element.strMeal"
                :img="element.strMealThumb"
               />
             </div>
          </div>
        </div>
      </main>
</template>

<script>

import MealCard from "./MealCard.vue"

export default {
  name: 'Main',
  components: {
      MealCard,
  },
  props: {
    meals: Array
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
  }
}
</style>
