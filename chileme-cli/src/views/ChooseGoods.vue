<template lang="pug">
    div.chooseGoods
        el-row
            el-col(:span='8')
                div.cartsAndOrder
            el-col(:span='16')
                div.menu
                    div.suggestFood
                        h4 推荐菜
                        div.foodsbox
                            div.foodItem(v-for='item in foodsbox',:key='item.id',@click='clickHandle(item)') {{item.name}}
                                span {{`￥${item.price}`}}
                        div.foodstab
                            el-tabs(type="border-card")
                                el-tab-pane(label="热菜") 热菜
                                el-tab-pane(label="凉菜") 凉菜
                                el-tab-pane(label="主食") 主食
                                el-tab-pane(label="饮料") 饮料
                            
</template>
<script>
export default {
    data(){
        return{
            foodsbox:[
                {id:1,name:'宫保鸡丁',price:10},
                {id:2,name:'孜然羊肉',price:10},
                {id:3,name:'红烧茄子',price:10},
                {id:4,name:'蒜苔炒肉',price:10},
                {id:5,name:'胡辣汤',price:10},
                {id:6,name:'炒南瓜',price:10},
                {id:7,name:'糊汤面',price:10},
                {id:8,name:'银耳汤',price:10},
                {id:9,name:'胡辣汤',price:10},
                {id:10,name:'炒南瓜',price:10},
                {id:11,name:'糊汤面',price:10},
                {id:12,name:'银耳汤',price:10},
                {id:13,name:'红烧茄子',price:10},
                {id:14,name:'蒜苔炒肉',price:10},
                {id:15,name:'胡辣汤',price:10},
                {id:16,name:'炒南瓜',price:10},
                {id:17,name:'糊汤面',price:10},
                {id:18,name:'银耳汤',price:10},
            ],
            list:[], // 存放点击的商品的数据
        }
    },
    methods:{
        clickHandle(obj){
            let flag = false
            for(let i=0;i<this.list.length;i++){
                if(obj.id === this.list[i].id){
                    flag = true  //当点击的数据在数组中存在，将flag置为true
                    break
                }
            }
            if(!flag){
                this.list.push(obj)
            }
            console.log(this.list)
        }
    }
}
</script>
<style lang="scss" scoped>
$h:100%;
.chooseGoods{
    height:$h;
    .el-row,.el-col{
        height: $h;
    }
    .cartsAndOrder,.menu{
        height: $h;
    }
    .cartsAndOrder{
        background: lightgrey;
    }
    .menu{
        background: snow;
        .suggestFood{
            height:400px;
            background:pink;
            display: flex;
            flex-direction: column;
            h4{
                text-align: left;
                height:30px;
                line-height: 30px;
                box-sizing: border-box;
                padding-left: 10px;
                font-size: 18px;
            }
            .foodsbox{
                flex:1;
                display:flex;
                padding:15px;
                justify-content: flex-start;
                flex-wrap: wrap;
                .foodItem{
                    padding:0 20px;
                    border:1px solid #333;
                    background: #fff;
                    line-height: 50px;
                    max-height: 50px;
                    margin:0 10px;
                    color:gray;
                    span{
                        color:red;
                        margin-left: 8px;
                    }
                }
            }
        }
    }
}
</style>