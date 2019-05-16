import Vue from 'vue'
import Router from 'vue-router'
import Consumer from './components/consumer/Consumer' //importando os componentes que serão usados na rotas
import User from './components/user/User' //importando os componentes que serão usados na rotas
import App from './App.vue'
import Menu from './components/Menu'


Vue.use(Router) //registrando a Router

export default new Router ({
    
    routes: [{
        name: 'inicio',
        path: '/', //definindo o caminho da rota
            components: {
                default: App, //identificando o componente da rota,
                menu: Menu
            }
        },
        {path: '/consumer', //definindo o caminho da rota
        component: Consumer,
       
    }, {
        path: '/user',//definindo o caminho da rota
        components: {
            default: User, //identificando o componente da rota,
            menu: Menu
        }
    }]

})