<template lang="pug">
    div.register
        div.inner
            div.el-icon-food
            el-form(:model="form",ref="Form",label-width="100px")
                el-form-item(
                    size='medium',
                    label="手机号",
                    prop="mobeli",
                    :rules="[{ required: true, message: '手机号不能为空'},{ type: 'number', message: '手机号必须为数字值'}]"
                    )
                    el-input(type="text",v-model.number="form.mobeli",autocomplete="off")
                el-form-item(
                    size='medium',
                    label="验证码",
                    prop="testCode"
                    )
                    el-input(type='text',v-model.trim="form.testCode",autocomplete="off",class='wth470')
                    el-button(@click="getTestCode") 获取验证码

                el-form-item
                    el-button(type="primary",@click="registerHandle('Form')") 提交
                    el-button(@click="resetForm('Form')") 重置
</template>
<script>
export default {
    data(){
        return{
            // 注册表单
            form:{
                mobeli:'', //手机号
                testCode:'', // 验证码
            }
        }
    },
    methods:{
        // 获取验证码
        getTestCode(){

        },
        // 提交注册表单方法
        registerHandle(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }
            });
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
.register{
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
    
    .wth470{
        width:470px;
    }
}
</style>