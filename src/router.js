import Vue from 'vue'
import Router from 'vue-router'
import Consumer from './components/consumer/Consumer' //importando os componentes que serão usados na rotas
import User from './components/user/User' //importando os componentes que serão usados na rotas

Vue.use(Router) //registrando a Router

export default new Router ({
    
    routes: [{
        path: '/consumer', //definindo o caminho da rota
        component: Consumer //identificando o componente da rota
    }, {
        path: '/user',//definindo o caminho da rota
        component: User //identificando o componente da rota
    }]

})