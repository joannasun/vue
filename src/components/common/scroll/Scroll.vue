<template>
    <div class="wrapper" ref='wrapper'>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'Scroll',
    props:{
       probeType:{
           type:Number,
           default:0
       },
       pullingUpLoad:{
           type:Boolean,
           default :true
       }
    },
    data(){
        return {scroll :null}
    },
    mounted(){
        this.scroll=new BScroll(this.$refs.wrapper,{
            probeType:this.probeType,
            click:true,
            pullUpLoad:this.pullingUpLoad
        })
        this.scroll.on('scroll',(pos)=>{
            this.$emit('scrollEvent', pos)
        })
        this.scroll.on('pullingUp',()=>{
            this.$emit('pullUp')
        })
    },
    methods:{
        scrollTo(x,y ,time){
            this.scroll && this. scroll.scrollTo(x,y,time)
        },
        finishPullUp(){
            return this.scroll.finishPullUp()
        },
        refresh(){
            console.log('debounce')
            this.scroll.refresh()
        },
        getScrollY(){
            this.scroll.y
        }
    }
}
</script>

<style scoped>

</style>