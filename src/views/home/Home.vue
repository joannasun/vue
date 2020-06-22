<template>
    <div id="home" class="home-nav">
        <nav-bar>
            <div slot="center">购物街</div>
        </nav-bar>
        <tab-control  @itemClick='tabClick' :titles="['流行','新款','精选']" ref='tabControl1' v-show="isTabFixed"></tab-control>
        <scroll class="content" ref='scroll' :probe-type='3' @scrollEvent='scrollTop' 
        :pulling-up-load='true' @pullUp='loadMore'>
            <home-swiper :banners='banners' @swipperLoad='swipperImgLoad'></home-swiper>
            <recommend-view :recommends='recommends'></recommend-view>
            <feature-view></feature-view>
            <tab-control  @itemClick='tabClick' :titles="['流行','新款','精选']" ref='tabControl2'></tab-control>
            <good-list :goodsList="showGoodsList"></good-list>
        </scroll>
        <back-top @click.native='backTop' v-show='isShowbackIcon'></back-top>
        
        
    </div>
</template>
<script>
import NavBar from '../../components/navbar/NavBar'
import HomeSwiper from './childrenComps/HomeSwiper'
import RecommendView from './childrenComps/RecommendView'
import FeatureView from './childrenComps/FeatureView'

import TabControl from '../../components/content/tabControl/TabControl'
import GoodList from '../../components/content/goods/GoodsList'
import Scroll from '../../components/common/scroll/Scroll'


import {getHomeMultidata, getHomeGoods} from '../../network/home'
import {NEW, POP, SELL, BACKTOP_DISTANCE} from "../../common/const";
import {debounce} from '../../common/utils'
import {itemListenerMixin, backTopMinXin} from '../../common/minxin'
export default {
    
    name:'Home',
    components:{
        NavBar,
        HomeSwiper,
        RecommendView,
        FeatureView,
        TabControl,
        GoodList,
        Scroll,
    },
    mixins:[itemListenerMixin, backTopMinXin],
    data(){
        return{
            banners:[],
            recommends:[],
            goods:{
                'pop': {page: 1, list: []},
                'new': {page: 1, list: []},
                'sell': {page: 1, list: []}

            },
            currentType:POP,
            
            tabOffSetTop:0,
            isTabFixed:false,
            saveY:0,
            itemImgListener:null
        }
        
    },
    computed: {
		  showGoodsList() {
              console.log('home',this.goods[this.currentType].list)
		    return this.goods[this.currentType].list
      }
    },
    created(){
        this.getHomeData()
        
        this.getHomeGoods(POP)
        this.getHomeGoods(NEW)
        this.getHomeGoods(SELL)

       
    },
    mounted(){
        // const refresh = debounce(this.$refs.scroll.refresh,100)
        // this.itemImgListener=()=>{refresh()}
        // this.$bus.$on('loadImg', this.itemImgListener)
       
    },
    destroyed(){
        this.$bus.$off('loadImg', this.itemImgListener)
        
        console.log('destroy')
    },
    activated(){
        console.log('activated')
        this.$refs.scroll.scrollTo(0,-this.saveY,0)
        this.$refs.scroll.refresh()
    },
    deactivated(){
        console.log('deactive')
        this.saveY=this.$refs.scroll.getScrollY()
    },
    methods:{
        scrollTop(position){
            this.isShowbackIcon= -(position.y)>888
            this.isTabFixed= -(position.y) > this.tabOffSetTop
            // console.log((-position.y),this.tabOffSetTop,this.isTabFixed)
        },
        swipperImgLoad(){
            
            this.tabOffSetTop = this.$refs.tabControl2.$el.offsetTop
            
        },
        
        getHomeData(){
            getHomeMultidata().then(res=>{
                this.banners=res.data.banner.list
                this.recommends=res.data.recommend.list
            })
        },
        getHomeGoods(type){
            
            getHomeGoods(type,this.goods[type].page).then(res=>{
                this.goods[type].list.push(...res.data.list)
                this.goods[type].page += 1
                this.$refs.scroll.finishPullUp()
                // console.log(this.goods[type].list)
            })
        },
        tabClick(index){
            switch(index){
                case 0:
                    this.currentType=POP; break;
                case 1:
                    this.currentType=NEW;break;
                case 2:
                    this.currentType=SELL;break;
                default:0
            }
            this.$refs.tabControl1.currentIndex=index
            this.$refs.tabControl2.currentIndex=index
        },
        
        
        loadMore(){
            console.log('loadmore')
            this.getHomeGoods(this.currentType)
            
        }
    }
}
</script>
<style scoped>
    .home-nav{
      padding-top: 44px;
      height: 100vh;
      position: relative;
    }
    .tab-control{
        position: sticky;
        top: 44px;
        background-color: #fff;
    }
    .content{
        /* height: calc(100% - 43px); */
        overflow: hidden;
       position: absolute;
       top:44px;
       bottom: 49px;
    }
</style>