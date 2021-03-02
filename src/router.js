import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import About from '@/view/About'
import Portfolio from '@/view/Portfolio'
import Contact from '@/view/Contact'

Vue.use(Router);

export const routes = {
	home: {
		path: '/',
		component: Home
	},
	about: {
		path: '/about',
		component: About
	},
	portfolio: {
		path: '/portfolio',
		component: Portfolio
	},
	contact: {
		path: '/contact',
		component: Contact
	}
}

export default new Router({
	mode: 'history',
	routes: Object.keys(routes).map((key) => {
		return {
			path: routes[key].path,
			component: routes[key].component
		}
	})
})