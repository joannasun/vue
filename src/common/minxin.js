import {debounce} from './utils'

export const itemListenerMixin={
    mounted(){
        let newRfresh= debounce(this.$refs.scroll.refresh,100)
        this.itemImgListener=()=>{
            newRfresh()
        }
        this.$bus.$on('itemImgLoad',this.itemImgListener)
        console.log('hunru')
    }
}
import BackTop from '../components/content/backTop/BackTop'
export const backTopMinXin={
    components:{
        BackTop
    },
    data(){
        return{
            isShowbackIcon:false
        }
    },
    methods:{
        backTop(){
            this.$refs.scroll.scrollTo(0,0,1000)
        },
    }
}