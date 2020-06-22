<template>
<div class="cart">
    <nav-bar class="cart-nav">
        <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <cart-list></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
</div>
    
</template>
<script>
import NavBar from '../../components/navbar/NavBar'
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'
import {mapGetters} from 'vuex'
export default {
    
    name:'Cart',
    components:{
        NavBar,
        CartList,
        CartBottomBar
    },
    computed:{
        //...mapGetters(['cartLength','cartList' ])
        ...mapGetters({
            length: 'cartLength',
            list :'cartList'
        })  
        // cartLength(){
        //     return this.$store.state.cartList.length
        // }
    }
}
</script>
<style scoped>
    .cart-nav{
        position:inherit
    }
</style>