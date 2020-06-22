<template>
    <div class="car-bottom">
        <div class="check-content">
            <CheckButton class="check-button" :value='isSelectedAll' @click.native="selectedAll"></CheckButton>
            <span>全选</span>
            <span class="total-price">合计: ¥{{totalPrice}}</span>
            <span class="buy-product">去计算({{$store.getters.cartLength}})</span>
        </div>
    </div>
</template>

<script>
import CheckButton from './CheckButton'
export default {
    name:'CarBottom',
    components:{
        CheckButton,
    },
    computed:{
        totalPrice(){
            return this.$store.state.cartList.filter(item=>{
                return item.checked
            }).reduce((preValue,item)=>{
                return preValue + item.price * item.count
            },0).toFixed(2)
        },
        isSelectedAll(){
            //return (!this.cartList.filter(item=>item.checked).length)
           
            if(this.$store.state.cartList.length===0)  return false
            return !this.$store.state.cartList.find(item=>!item.checked)
        }
    },
    methods:{
        selectedAll(){
            console.log('joclick')
            if(this.isSelectedAll){
                this.$store.state.cartList.forEach(item=>item.checked=false)
            }else{
                this.$store.state.cartList.forEach(item=>item.checked=true)
            }
            
        }
    }
}
</script>

<style scoped>
    .car-bottom{
        height: 40px;
        position: fixed;
        bottom: 49px;
        width: 100%;
        background-color: #eee;
    }
    .check-content{
        display: flex;
        align-items: center;
    }
    .check-button{
        height: 20px;
        line-height: 20px;
        margin-left: 15px;
        margin-right: 5px;
    }
    .total-price {
        margin-left: 15px;
        font-size: 16px;
        color: #666;
        flex: 1;
    }

   .buy-product {
        background-color: orangered;
        color: #fff;
        width: 100px;
        height: 40px;
        text-align: center;
        line-height: 40px;
  }
</style>