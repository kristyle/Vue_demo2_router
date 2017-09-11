import Vue from 'vue'
import VueRouter from 'vue-router'
import about from '../components/about.vue'
import home from '../components/home.vue'
import news from '../components/news.vue'
import message from '../components/message.vue'
import detail from '../components/message-detai.vue'

Vue.use(VueRouter)

export default new VueRouter({
  linkActiveClass:'active',
  routes:[
    {
      path:'/',
      redirect:'/about'
    },
    {
      path:'/about',
      component:about
    },
    {
      path:'/home',
      component:home,
      children:[
        {
          path:'/home/news',
          component:news
        },
        {
          path:'/home/message',
          component:message,
          children:[
            {
              path:'/home/message/detail/:id',
              component:detail
            }
          ]
        }
      ]
    }
  ]
})


