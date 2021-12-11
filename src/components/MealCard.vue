<template>
      <div class="card-container col-sm-12 col-md-6 col-lg-4">
        <div class="card">
          <img class="card-img-top" :src="img" alt="Card image cap">
          <div class="card-body">
            <h6 class="card-title">{{name}}</h6>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'MealCard',
  props: {
    name: String,
    mId: String,
    img: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-container{
  padding: 10px;
}
</style>
