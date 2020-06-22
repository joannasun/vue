<template>
    <div class="cart-list">
        <scroll class="content" ref="scroll">
            <cart-list-item v-for="(item, index) in cartList" :key="index" :itemInfo='item'>

            </cart-list-item>
            
        </scroll>
    </div>
</template>

<script>
import Scroll from '../../../components/common/scroll/Scroll'
import CartListItem from './CartListItem'

import {mapGetters} from 'vuex'
export default {
    name:"cartList",
    components:{
        Scroll,
        CartListItem,
    },
    computed:{
        ...mapGetters(['cartList'])
    },
    activated(){
        this.$refs.scroll.refresh()
        console.log(this.$store.state.cartList)
    }
}
</script>

<style scoped>
    .cart-list{
        height: 100vh;
    }
    .content{
        height: calc( 100% - 44px - 49px - 40px);
        overflow: hidden;
        /* margin-top: 44px; */
    }
</style>