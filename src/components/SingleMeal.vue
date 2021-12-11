<template>
  <div class="row container-single-card">
    <div class="col-12 route-link-container">
      <router-link class="route-link" :to="{name: 'home'}">
        <div class="d-flex route-content">
          <span class="arrow-icon"><i class="fas fa-arrow-left"></i></span>
          <span class="link-menu">Menu</span>
          <span class="link-menu">/{{name}}</span>
        </div>
      </router-link>
    </div>
    <div class="name-box col-md-12 col-lg-4 d-flex justify-content-center">
      <h1>{{name}}</h1>
    </div>
    <div class="col-md-12 col-lg-8">
      <div class="row justify-content-center">
        <div class="picture-container col-12 col-sm-9">
          <img class="picture" :src="img" alt="" >
        </div>
      </div>
    </div>

    <div class="col-12 info-box">
      <div class="category">
        <strong>Category:</strong> {{category}}
      </div>
      <div class="area">
        <strong>Area:</strong> {{area}}
      </div>
    </div>
    

    <div class="col-12">
      <h2>How it is made</h2>
      <p>{{instructions}}</p>
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
      instructions: String,
      tags: String
  },
}
</script>

<style lang="scss">
.container-single-card{
  .route-link-container{
    .route-content{
      .arrow-icon{
        margin-right: 5px;
      }
    }
    .route-content .link-menu:first-child{
      font-weight: bold;
    }
    .route-content .link-menu:last-child{
      color: #ACACAC;
    }
    .route-link{
    text-decoration: none;
    color: #000;  
    }
  }
  .name-box, .picture-container{
    margin: 50px 0;
  }
  .picture-container{
    border: 2px solid rgba(211, 211, 211, 0.664);
    border-radius:10px;
    padding: 0;
    overflow: hidden;
    
    .picture{
      height: 380px;
      width: 100%;
      object-fit: unset;
      object-position:center center;
    }
  }
  .info-box{
    margin-bottom: 50px;
  }
}
</style>
