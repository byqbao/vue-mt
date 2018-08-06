import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Start from '@/components/Start'

Vue.use(Router)

export default new Router({
  	routes: [
	    {
	      	path: '/',
	      	name: 'HelloWorld',
	      	component: HelloWorld
	    },{
	    	path: '/start',
	      	name: 'HelloWorld',
	      	component: Start
	    }
  	]
})
