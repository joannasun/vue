<template>
    <div class="detailNav">
        <nav-bar>
            <div class="back" slot="left" @click="backClick">
                <img src="../../../assets/img/common/back.svg" alt="">
            </div>
            <div slot='center' class="title">
                <div class="title-item" v-for="(item,index) in title" :key='index'
                @click="itemClick(index)" :class="{active:index===currentIndex}">{{item}}</div>
            </div>
        </nav-bar>
    </div>
</template>

<script>
import NavBar from '../../../components/navbar/NavBar'

export default {
    name:'DetailNavBar',
    components:{
        NavBar
    },
    data(){
        return{
            title:['商品','参数','评论','推荐'],
            currentIndex:0,
            isActive:false
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex=index

            this.$emit('titleClick', index)
            
        },
        backClick(){
            //this.$router.go(-1)
            this.$router.back()
        }
    }

}
</script>

<style scoped>
    .title{
        display:flex;
        font-size: 13px;
    }
    .title-item{
        flex: 1;
    }
    .active{
        color: yellow;
    }
    .back img{
        width: 11px;
        height: 11px;
  }

</style>