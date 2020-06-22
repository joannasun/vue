<template>
    <swiper class="detailSwipper">
        <swiper-item v-for="(item, index) in image" :key='index' >
            <img :src="item" alt="">
        </swiper-item>
    </swiper>
</template>

<script>
import {Swiper, SwiperItem} from '../../../components/swiper/index'
export default {
    name:'detailSwipper',
    props:{
        image:{
            type:Array,
            default:[]
        }
    },
    components:{
        Swiper,
        SwiperItem
    }
}
</script>

<style scoped>
    .detailSwipper{
        height: 300px;
        overflow: hidden;
    }
</style>