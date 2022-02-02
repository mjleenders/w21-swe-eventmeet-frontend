import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Movies from '@/views/Movies.vue'
import Series from '@/views/Series.vue'
import Movie from '@/views/Movie.vue'
import Serie from '@/views/Serie.vue'
import Groups from '@/views/Groups.vue'
import Podcasts from '@/views/Podcasts.vue'
import Podcast from '@/views/Podcast.vue'

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/movies',
    name: 'Movies',
    component: Movies,
  },
  {
    path: '/series',
    name: 'Series',
    component: Series,
  },
  {
    path: '/movies/:MovieID',
    name: 'Movie',
    component: Movie,
  },
  {
    path: '/series/:SerieID',
    name: 'Serie',
    component: Serie,
  },
  {
    path: '/podcasts/:PodcastId',
    name: 'Podcast',
    component: Podcast,
  },
  {
    path: '/groups',
    name: 'Groups',
    component: Groups,
  },
  {
    path: '/podcasts',
    name: 'Podcasts',
    component: Podcasts,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
