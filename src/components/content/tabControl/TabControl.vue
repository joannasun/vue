<template>
    <div class="tab-control">
        <div v-for="(item,index) in titles" :key="index" class="tab-control-item"
         :class="{active:index==currentIndex}" @click="itemClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name:'TabControl',
    props:{
        titles:{
            type:Array,
            default:[]
        }
    },
    data(){
        return {
            currentIndex:0
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex=index

            this.$emit('itemClick', index)
        }
    }
}
</script>
<style scoped>
    .tab-control{
        display: flex;
        text-align: center;
        font-size: 15px;
        height: 40px;
        line-height: 40px;
        z-index: 123;
    }
    .tab-control-item {
        flex:1
    }
    .tab-control-item span {
        margin-bottom: 3px ;
    }
    .active{
        color: yellow;
    }
    .active span {
        border-bottom: 3px solid yellow;
    }
</style>