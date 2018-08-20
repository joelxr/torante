import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Receita from './views/receita/Receita'
import Fornecedor from './views/fornecedor/Fornecedor'
import Produto from './views/produto/Produto'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/receita',
      name: 'receita',
      component: Receita
    },
    {
      path: '/fornecedor',
      name: 'fornecedor',
      component: Fornecedor
    },
    {
      path: '/produto',
      name: 'produto',
      component: Produto
    }
  ]
})
