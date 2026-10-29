import { createRouter, createWebHistory } from 'vue-router'
import StoryPage from './pages/StoryPage.vue'
import VueCoursePage from './pages/VueCoursePage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'story', component: StoryPage },
    { path: '/vue', name: 'vue', component: VueCoursePage },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
})
