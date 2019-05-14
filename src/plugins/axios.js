import Vue from 'vue'
import axios from 'axios'


Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-2393d.firebaseio.com/'
        })

        Vue.prototype.$http.interceptors.request.use(request => {
            //Podemos, por exemplo, descobrir qual métodos axios está sendo usado, quando este for chamado
            console.log(request.method)
            return request

        }, error => Promise.reject(error))
        
    }
})
