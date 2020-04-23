<template lang='pug'>
  div.home
      el-row
          el-col(:span='1')
              div.grid-left
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
    background: mediumblue;
  }
}

</style>
