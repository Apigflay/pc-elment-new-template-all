<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
*{padding: 0;margin:0;}
html,body{
  width:100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width:100%;
  height: 100%;
  // color: #2c3e50;
  // margin-top: 60px;
}
.content{
  // table{width: 100% !important;}
  width:100%;
  height: 100%;
  display: flex;
  .silderBar{
    width:200px;
    height: 100%;
    overflow-y: scroll;
    background: #001529;
    // .ivu-menu{
    //   box-sizing: border-box;
    //   background: #001529;
    //   .ivu-menu-submenu-title{
    //     background: #001529;
    //   }
    //   .ivu-menu-item{
    //     background: #000C17;
    //   }
    // }
  }
  /*webkit内核*/
  .silderBar::-webkit-scrollbar {
      width:0px;
      height:0px;
  }
  .pop::-webkit-scrollbar {
      width:0px;
      height:0px;
  }
  /*o内核*/
  .silderBar .-o-scrollbar{
      -moz-appearance: none !important;   
      background: rgba(0,255,0,0) !important; 
  }
  .pop .-o-scrollbar{
      -moz-appearance: none !important;   
      background: rgba(0,255,0,0) !important; 
  }
  /*IE10,IE11,IE12*/
  .silderBar,.pop{
      -ms-scroll-chaining: chained;
      -ms-overflow-style: none;
      -ms-content-zooming: zoom;
      -ms-scroll-rails: none;
      -ms-content-zoom-limit-min: 100%;
      -ms-content-zoom-limit-max: 500%;
      -ms-scroll-snap-type: proximity;
      -ms-scroll-snap-points-x: snapList(100%, 200%, 300%, 400%, 500%);
      -ms-overflow-style: none;
      overflow: auto;
  }
  .body_main{
      flex: 1;
      display: flex;
      flex-direction:column;
      .navBar{
        height: 60px;
        width:100%;
      }
      .main{
        flex:1;
        overflow-y: scroll;
        padding:15px 10px 15px 10px;
        // .table{width: calc(100%);}
      }  
  }
}
</style>
