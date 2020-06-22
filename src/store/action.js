import {ADD_COUNTER,ADD_TO_CART} from './mutations.type'

export default {
    addCart(context, payLoad){
        return new Promise((resolve, reject)=>{
            let oldInfo= context.state.cartList.find( item=>item.iid=== payLoad.iid)

            if(oldInfo){
                context.commit(ADD_COUNTER, oldInfo)
                resolve('数量+1')
            }else{
                context.commit(ADD_TO_CART,payLoad)
                resolve('数量=1')
            }
        })
        
    }
}