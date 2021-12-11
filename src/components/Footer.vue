<template>
      <footer>
        <div class="container footer-container">
          <div class="row footer-content">
            <div class="col-sm-12 col-md-6 right-footer-container">
                <div class="right-footer">Ristorante da Mario</div>
                <div class="right-footer">Via Torino, Milano</div>
            </div>
            <div class="col-sm-12 col-md-6 left-footer-container">
                <div class="row">
                  <div class="col-sm-12 col-md-6 left-footer d-flex justify-content-start">Follow us on:</div>
                  <div class="col-sm-12 col-md-6 left-footer d-flex justify-content-start">
                    <a href="#" class="left-footer-icon">
                      <i class="fab fa-facebook-square"></i>
                    </a>
                    <a href="#" class="left-footer-icon">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
footer{
  height: 200px;
  background-color: #ACACAC;
  color: #fff;
  .footer-container{
    height: 100%;
      .footer-content{
        align-items: center;
        height: 100%;
        .right-footer-container, .left-footer-container{
          height: 70px;
          font-size: 20px;
            .left-footer{
            align-items: center;
            .left-footer-icon{
              text-decoration: none;
              color: #fff;
              font-size: 20px;
              margin-right: 15px;
            }
          }
        }
      }
  }
}
</style>
