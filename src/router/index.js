import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Start from '@/components/Start'
import Nearby from '@/components/Nearby'
import Find from '@/components/Find'
import Order from '@/components/Order'
import Me from '@/components/Me'
import Food from '@/components/Food'
import Movie from '@/components/Movie'
import Hotel from '@/components/Hotel'

Vue.use(Router)

export default new Router({
  	routes: [
	    {
	      	path: '/',
	      	name: 'Index',
	      	component: Index
	    },{
	    	path: '/start',
	      	name: 'Start',
	      	component: Start
	    },{
	    	path: '/nearby',
	      	name: 'Nearby',
	      	component: Nearby
	    },{
	    	path: '/find',
	      	name: 'Find',
	      	component: Find
	    },{
	    	path: '/order',
	      	name: 'Order',
	      	component: Order
	    },{
	    	path: '/me',
	      	name: 'Me',
	      	component: Me
	    },{
	    	path: '/food',
	      	name: 'Food',
	      	component: Food
	    },{
	    	path: '/movie',
	      	name: 'Movie',
	      	component: Movie
	    },{
	    	path: '/hotel',
	      	name: 'Hotel',
	      	component: Hotel
	    }
  	]
})
