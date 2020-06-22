<template>
    <div class="detail">
        <detail-nav-bar @titleClick='titleClick' ref="nav" :current-index="currentIndex"></detail-nav-bar>
        <!-- <div>{{this.$store.state.cartList}}</div> -->
        <BScroll class="content" ref="scroll"  :probeType='3' @scrollEvent='contentScroll'>
            <detail-swipper :image='images'></detail-swipper>
            <detail-base-info :goods='goods'></detail-base-info>
            <detail-shop-info :shop='shopInfo'></detail-shop-info>
            <detail-goods-info :detailInfo='detailInfo' @imgload='imgLoad'></detail-goods-info>
            <detail-param-info :paramInfo='paramInfo' ref="param"></detail-param-info>
            <detail-comment-info :commentInfo='commentInfo' ref="comment"></detail-comment-info>
            <goods-list :goodsList='reCommend' ref="recommend"></goods-list>
        </BScroll>
        <detail-bottom-bar @addCart='addToCart'></detail-bottom-bar>
        <back-top @click.native='backTop' v-show='isShowbackIcon'></back-top>
        <!-- <toast :message='message' :isShow='show'></toast> -->
    </div>
</template>

<script>
import DetailNavBar from './childCom/DetailNavBar'
import DetailSwipper from './childCom/DetailSwipper'
import DetailShopInfo from './childCom/DetailShopInfo'
import DetailBaseInfo from './childCom/DetailBaseInfo'
import DetailGoodsInfo from './childCom/DetailGoodsInfo'
import DetailParamInfo from './childCom/DetailParamInfo'
import DetailCommentInfo from './childCom/DetailCommentInfo'
import GoodsList from '../../components/content/goods/GoodsList'
import DetailParamInfoVue from './childCom/DetailParamInfo.vue'
import DetailBottomBar from './childCom/DetailBottomBar'
import BackTop from '../../components/content/backTop/BackTop'
// import Toast from '../../components/toast/Toast'


import BScroll from '../../components/common/scroll/Scroll'
import {getDetail,Shop,Goods,GoodsParam,getRecommend} from '../../network/detail'
import {itemListenerMixin,backTopMinXin} from '../../common/minxin'
import {debounce} from '../../common/utils'
import {mapActions} from 'vuex'
export default {
    name:"Detail",
    data(){
        return{
            iid:null,
            images:[],
            shopInfo:{},
            goods:{},
            detailInfo:{},
            paramInfo:{},
            commentInfo:{},
            reCommend:{},
            itemImgListener:null,
            themTopY:[],
            getThemTopY:null,
            currentIndex:0,
            // message:'',
            // show:false,
        }
    },
    mixins:[itemListenerMixin],
    created(){
        this.iid=this.$route.params.iid

        getDetail(this.iid).then(res=>{
            // console.log(res)
            const data=res.result
            this.images=data.itemInfo.topImages
            this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
            this.shopInfo = new Shop(data.shopInfo)
            this.detailInfo = data.detailInfo
            this.paramInfo=new GoodsParam(data.itemParams.info, data.itemParams.rule)
            if(data.rate.cRate!=0){
                this.commentInfo= data.rate.list[0]
            }
            
        })
        getRecommend().then((res)=>{
            this.reCommend = res.data.list
            // console.log(this.reCommend)
        })
        this.getThemTopY=debounce(()=>{
            this.themTopY=[]
            this.themTopY.push(0)
            this.themTopY.push(this.$refs.param.$el.offsetTop)
            this.themTopY.push(this.$refs.comment.$el.offsetTop)
            this.themTopY.push(this.$refs.recommend.$el.offsetTop)
            
        })
    },
    mounted(){
        // const refresh = debounce(this.$refs.scroll.refresh,100)
        // this.itemImgListener=()=>{refresh()}
        // this.$bus.$on('loadImg', this.itemImgListener)
    },
    updated(){

    },
    destroyed(){
        this.$bus.$off('loadImg', this.itemImgListener)
    },
    components:{
        DetailNavBar,
        DetailSwipper,
        DetailShopInfo,
        DetailBaseInfo,
        BScroll,
        DetailGoodsInfo,
        DetailParamInfo,
        DetailCommentInfo,
        GoodsList,
        DetailBottomBar,
        //Toast,
    },
    mixins:[ backTopMinXin],
    methods:{
        imgLoad(){
            this.$refs.scroll.refresh()
            this.getThemTopY()
        },
        titleClick(index){
            this.$refs.scroll.scrollTo(0, -this.themTopY[index]+44, 100)
        },
        contentScroll(position){
             this.isShowbackIcon= -(position.y)>888
            let positiony=-position.y
            // console.log(position.y)
            let length = this.themTopY.length;
            // for (let i = 0; i < length; i++) {
            //     if(this.currentIndex!=i && ((i<length-1 && positiony >= this.themTopY[i] 
            //     && positiony < this.themTopY[i+1]) || (i === length -1 && positiony>= this.themTopY[i]))){
            //         this.currentIndex=i
            //         this.$refs.nav.currentIndex=this.currentIndex
            //     }
            // }
             for (let i = 0; i < length-1; i++) {
                if(this.currentIndex!=i && (positiony>=this.themTopY[i]&& positiony< this.themTopY[i+1])){
                    this.currentIndex=i
                    this.$refs.nav.currentIndex=this.currentIndex
                }
            }
        },
        ...mapActions(['addCart']),
        addToCart(){
            
            const product={}
            product.image= this.images[0]
            product.title=this.goods.title
            product.desc=this.goods.desc
            product.price=this.goods.nowPrice
            product.iid=this.iid
            //this.$store.commit('addCart',product)
            this.addCart(product).then(res=>{
                console.log(res);
                this.$toast.showMessage(res, 1500)
            })
            // this.$store.dispatch('addCart',product).then(res=>{
            //     console.log(res)
            // })
        }
    }
}
</script>

<style scoped>
    .detail{
        height: 100vh;
        position: relative;
        z-index: 1;
        background-color: #fff;
    }
    .content{
        height: calc(100% - 44px);
        position: relative;
        background-color: #fff;
    }
</style>