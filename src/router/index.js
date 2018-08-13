import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Start from '@/components/Start'
import Nearby from '@/components/Nearby'
import Find from '@/components/Find'
import Order from '@/components/Order'

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
	    }
  	]
})
