import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'
import musicLibrary from '../components/musicLibrary'
import personalAdvice from '../components/personalAdvice'
import list from '../components/list'
import listContent from '../components/listContent'
import playList from '../components/playList'
import music from '../components/music'
import mine from '../components/mine'
import comment from '../components/comment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {
          path: 'musicLibrary',
          name: 'library',
          component: musicLibrary,
          children: [
            {
              path: 'personalAdvice',
              name: 'personalAdvice',
              component: personalAdvice
            },
            {
              path: 'list',
              name: 'list',
              component: list
            }
          ]
        }
      ]
    },
    {
      path: '/listContent/:id',
      name: 'listContent',
      component: listContent
    },
    {
      path: '/playList/:id',
      name: 'playList',
      component: playList
    },
    {
      path: '/user',
      name: 'mine',
      component: mine
    },
    {
      path: '/music/:id',
      name: 'music',
      component: music
    },
    {
      path: '/comment/:id',
      name: 'comment',
      component: comment
    }
  ]
})
