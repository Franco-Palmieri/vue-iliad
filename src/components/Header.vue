<template>
      <header>
        <div class="container">
          <div class="row">
            <router-link class="route-link col-12" :to="{name: 'home'}">
              RISTORANTE DA MARIO
            </router-link>
          </div>
        </div>
      </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

header{
  background-color: #001F3D;
  color: #ffffff;
  height: 50px;
  display: flex;
  align-items: center;
  .route-link{
    color: #fff;
    text-decoration: none;

  }
}
</style>
