import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import RedditView from '../views/RedditView.vue'
import MediumView from '../views/MediumView.vue'
import RefindView from '../views/RefindView.vue'
import BlogFeedView from '../views/BlogFeedView.vue'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/reddit', component: RedditView },    
    { path: '/refind', component: RefindView },
    { path: '/medium', component: MediumView },
    { path: '/:blogID', component: BlogFeedView },
    { path: '*', redirect: '/reddit' }
  ]
})
