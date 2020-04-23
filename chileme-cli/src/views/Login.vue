<template lang="pug">
    div.login
        div.inner
            div.el-icon-food
            el-form(:model="form",ref="Form",label-width="100px")
                el-form-item(
                    label="手机号",
                    prop="mobeli",
                    )
                    el-input(type="text",v-model.number="form.mobeli",autocomplete="off")
                el-form-item(
                    label="密码",
                    prop="password"
                    )
                    el-input(type='password',v-model="form.password",autocomplete="off")
                el-form-item
                    el-button(type="primary",@click="loginHandle") 登录
                    el-button(@click="resetForm('Form')") 重置
</template>
<script>
export default {
    data(){
        return{
            form:{
                mobeli:'',
                password:''
            }
        }
    },
    methods:{
        loginHandle(){

        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>
<style lang="scss" scoped>
    @mixin flx($dec:culomn){
    display:flex;
    flex-direction: $dec;
}
.login{
    @include flx;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: lightgrey;
    .inner{
        width: 50%;
        height: 90%;
        .el-icon-food{
            height: 20%;
            min-height: 220px;
            line-height: 220px;
            font-size: 200px;
            color: goldenrod;
        }
        .el-form{
            margin:20px auto 0;
            width:700px;
        }
    }
}    
</style>