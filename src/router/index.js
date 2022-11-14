import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MoviesView from '../views/MoviesView.vue'
import SeriesView from '../views/SeriesView.vue'
import BookMarkView from '../views/BookmarkView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/movies',
    name: 'movies',
    component: MoviesView
  },
  {
    path: '/series',
    name: 'series',
    component: SeriesView
  },
  {
    path: '/bookmark',
    name: 'bookmark',
    component: BookMarkView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
