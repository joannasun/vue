<template>
    <div class="toast" v-if="isShow">
        {{message}}
    </div>
</template>

<script>
export default {
    name:"toast",
    data(){
       return{
            message:'',
            isShow:false
       }

    },
    methods:{
        showMessage(msg, duration){
            this.isShow=true
            this.message=msg

            setTimeout(() => {
                this.message=''
                this.isShow=false
            }, duration);
        }
    }
    // props:{
    //     message:{
    //         type:String,
    //         default:''
    //     },
    //     isShow:{
    //         type:Boolean,
    //         default: false
    //     }
    // }
}
</script>

<style scoped>
    .toast{
        position: fixed;
        left: 50%;
        top:50%;
        transform: translate(-50%,-50%);
        background-color :rgba(
            0, 0, 0, .6);
        color: #fff;
        padding: 8px 10px;
        z-index: 888;
    }
</style>>
