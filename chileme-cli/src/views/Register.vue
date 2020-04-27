<template lang="pug">
    div.register
        div.inner
            div.el-icon-food
            el-form(:model="form",ref="Form",label-width="100px")
                el-form-item(
                    size='medium',
                    label="手机号",
                    prop="mobile",
                    :rules="[{ required: true, message: '手机号不能为空'},{ type: 'number', message: '手机号必须为数字值'}]"
                    )
                    el-input(type="text",v-model.number="form.mobile",autocomplete="off")
                el-form-item(
                    size='medium',
                    label="验证码",
                    prop="testCode"
                    )
                    el-input(type='text',v-model.trim="form.testCode",autocomplete="off",class='wth470')
                    el-button(@click="getTestCode('Form')") 获取验证码

                el-form-item
                    el-button(type="primary",@click="registerHandle('Form')") 提交
                    el-button(@click="resetForm('Form')") 重置
        el-dialog(title="完善信息",:visible.sync="dialogFormVisible")       
            el-form(:model="userform",label-width='100px')     
                el-form-item(label="用户名")
                    el-input(v-model="form.username",autocomplete="off")
                el-form-item(label="性别")
                    el-radio(v-model="userform.sex" label="1") 男
                    el-radio(v-model="userform.sex" label="0") 女
                el-form-item(label="密码")
                    el-input(type='password',v-model="form.password",autocomplete="off")
            div(slot="footer")
                el-button(type="primary" @click="dialogFormVisible = false") 确 定    
</template>
<script>
export default {
    data(){
        return{
            // 注册表单
            form:{
                mobile:'', //手机号
                testCode:'', // 验证码
            },
            userform:{// 用户信息表单
                username:'',//用户名
                sex:'',//性别
                password:'',//密码
            },
            // 弹窗的显隐
            dialogFormVisible:false,
        }
    },
    methods:{
        // 获取验证码
        getTestCode(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.Axios({
                        methods:'post',
                        url:'/api/user/getTestCode',
                        data:{
                            mobile:this.mobile
                        }
                    }).then(data => {
                        console.log(data)
                    }).catch(err => {
                        console.log(err)
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
            
        },
        // 提交注册表单方法
        registerHandle(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    // alert('submit!');
                    this.dialogFormVisible = true
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
    .el-dialog{
        text-align: left;
    }
    .wth470{
        width:470px;
    }
}
</style>