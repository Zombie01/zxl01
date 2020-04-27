<template lang='pug'>
  div.home
      el-row
          el-col(:span='1')
              div.grid-left
                  div.iconfont &#xe642;
                    i 收银
                  div.iconfont &#xe616;
                    i 会员
                  div.iconfont &#xe65f;
                    i 库存
                  div.iconfont &#xe64c;
                    i 报表
                  div.iconfont &#xe600;
                    i 辅助
                  div.iconfont &#xe650;
                    i 退出
          el-col(:span='23')
              div.grid-right 
</template>

<script>


export default {
  name: 'Home',
  
}
</script>
<style lang="scss" scoped>
.home{
  height: 100%;
  .el-row,.el-col{
    height: 100%;
  }
  .grid-left,.grid-left{
    height: 100%;
  }
  .grid-left{
    display:flex;
    flex-direction: column;
    background: rgb(0, 188, 221);
    color:#fff;
    .iconfont{
      flex:1;
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 40px;
      i{
        font-size: 16px;
      }
      &:hover{
        background: rgb(235, 0, 47);
      }
    }
  }
}

</style>
