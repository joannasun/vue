<template>
    <grid-view>
        <goods-list-item v-for='(item,index) in goodsList' :key="index"  :goods-item='item'></goods-list-item>
    </grid-view>
    
</template>

<script>
import goodsListItem from './GoodsListItem'
import GridView from '../../common/gridView/GridView'
export default {
    name:'goodsList',
    props:{
        goodsList:{
            // type:Array,
            default:[]
        }
    },
    components:{
        goodsListItem,
        GridView
    },
    
}
</script>

<style scoped>
   
</style>