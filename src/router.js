import VueRouter from 'vue-router'
import Login from './Login.vue'
import HomePage from './HomePage.vue'
import AboutPage from './AboutPage.vue'
import ContactPage from './ContactPage.vue'
import PageNotFound from './PageNotFound.vue'
import Export from './Export.vue'

const routes = [
  
  { path: '/',name: 'login',component: Login},
  { path: '/home', component: HomePage, name: 'home' },
  { path: '/about', component: AboutPage, name: 'about' },
  { path: '/contact', component: ContactPage, name: 'contact' },
  { path: '/Export', component: Export, name: 'Export' },
  { path: '*', component: PageNotFound },
]

export const router = new VueRouter({
  mode: 'history', base: process.env.BASE_URL,
  routes
})


