<template>
  <div class="silderBar">
        <div class="logoArea">
            喵播后台管理
        </div>  
  </div>
</template>

<script>


  export default {
    name: 'Slider',
    data() {
      return {
        theme: 'dark',//silder 背景颜色 light  dark
        acName:'',//菜单激活的name
      }
    },
    created () {
      
    },
    methods: {

    }
     
  }
</script>

<style scoped lang="scss">
.silderBar{
    .logoArea{
        width: 160px;
        margin:20px auto;
        background: #2D8CF0;
        border-radius:10px 5px 5px 0;
        color:#fff;
        font-weight: 900;
        line-height: 34px;
        font-size: 22px;
        color:#fff;
        
    }
}
</style>
