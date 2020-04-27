<template lang="pug">
    div.stockManagement
        el-row
            el-col(:span='12')
                div.stockForm
            el-col(:span='12')
                div.stockTable
</template>
<script>
export default {
    data(){
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
$h:100%;
.stockManagement{
    height: $h;
    .el-row,.el-col{
        height: $h;
    }
    .stockForm,.stockTable{
        height: $h;
        overflow-y: auto;
    }
    .stockForm{
        background: thistle;
    }
    .stockTable{
        background: darkgrey;
    }
}
</style>