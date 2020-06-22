import Toast from './Toast'

// const obj={}

// obj.install =function(vue){
//     // document.body.appendChild(Toast.$el)
//     // vue.prototype.$toast=Toast
//     const toast = new (vue.extend(Toast))

//     toast.$mount(document.createElement('div'))
//     document.body.appendChild(toast.$el)

//     console.log(toast.$el)
//     vue.prototype.$toast=toast
// }

export default {
    install(vue){
        const toast = new (vue.extend(Toast))
        toast.$mount(document.createElement('div'))
        document.body.appendChild(toast.$el)
        console.log(toast.$el)
        vue.prototype.$toast=toast
    }
}
