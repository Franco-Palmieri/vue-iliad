<template>
  <div class="row">
    <div class="col-12">
      Menu 
    </div>
    <div class="col-4">
      {{name}}
    </div>
    <div class="col-8">
      <img :src="img" alt="">
    </div>

    <div class="col-12">
      <h5>How it is made</h5>
      {{instructions}}
    </div>
  </div>
</template>

<script>


export default {
    
  name: 'SingleMeal',
  props: {
      id: String,
      name: String,
      img: String,
      area: String,
      category: String,
      instructions: String
  },
}
</script>

<style lang="scss">

</style>
