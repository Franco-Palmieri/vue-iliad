import Vue from 'vue'
	import Router from 'vue-router'

	Vue.use(Router)
	export default new Router({
	  routes: [
		  
		  // http://localhost:8080/#/home
		{
		  path: '/home',
		  name: 'home',
		  component: () => import('@/views/Home.vue')
		},

		// http://localhost:8080/#/meal/{id}
        {
            path: '/meal/:id',
            name:'meal',
            component: () => import('@/views/Meal.vue')
        }
	  ]
	})