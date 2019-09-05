import Vue from 'vue'
import Router from 'vue-router'
import Book from '../pages/Book'
import Details from '../pages/Details'
import Group from '../pages/Group'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Movie from '../pages/Movie'
import Search from '../pages/Search'
import Radio from '../pages/Radio'
import Register from '../pages/Register'
// import headOne from '../components/headOne'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/book',
      name: 'book',
      component: Book
    },
    {
      path: '/details',
      name: 'details',
      component: Details
    },
    {
      path: '/group',
      name: 'group',
      component: Group
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/movie',
      name: 'movie',
      component: Movie
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/radio',
      name: 'radio',
      component: Radio
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    // {
    //   path: '/headbar',
    //   name: 'headbar',
    //   component: headbar
    // },
    {
      path:"/*",
          redirect:"/home"
    }
  ]
  
})
