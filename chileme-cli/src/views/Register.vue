<template lang="pug">
    div.register
        div.el-icon-food
        el-form(:model="form",ref="Form",label-width="100px")
            el-form-item(
                label="手机号",
                prop="mobeli",
                :rules="[{ required: true, message: '手机号不能为空'},{ type: 'number', message: '手机号必须为数字值'}]"
                )
                el-input(type="mobeli" v-model.number="form.mobeli" autocomplete="off")
            
            el-form-item
                el-button(type="primary" @click="registerHandle('Form')") 提交
                el-button(@click="resetForm('Form')") 重置
</template>
<script>
export default {
    data(){
        return{
            // 注册表单
            form:{
                mobeli:'',
            }
        }
    },
    methods:{
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