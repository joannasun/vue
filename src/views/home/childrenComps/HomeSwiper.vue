<template>
    <swiper>
        <swiper-item v-for="(item,index) in banners" :key='index' >
            <a :href="item.link">
                <img :src="item.image" alt="" @load='imgLoad'>
            </a>
         </swiper-item>
    </swiper>
</template>
<script>
import {Swiper,SwiperItem} from '../../../components/swiper'
export default {
    name:"HomeSwiper",
    props:{
        banners:{
            type:Array,
            default:[]
        }
    },
    data(){
        return {
            isLoad:false
        }
    },
    components:{
        Swiper,
        SwiperItem
    },
    created(){
        console.log(this.banners)
    },
    methods:{
        imgLoad(){
            if(!this.isLoad){
                this.$emit('swipperLoad')
                this.isLoad=true
                console.log('home img load')
            }
        }
    }
}
</script>