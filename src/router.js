import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import About from '@/view/About'
import Project from '@/view/Project'
import Contact from '@/view/Contact'
import Blog from '@/view/Blog'

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
	project: {
		path: '/project',
		component: Project
	},
	contact: {
		path: '/contact',
		component: Contact
	},
	blog: {
		path: '/blog',
		component: Blog
	}
}

// Object.keys(routes) -> ['about']

export default new Router({
	mode: 'history',
	routes: Object.keys(routes).map((key) => {
		return {
			path: routes[key].path,
			component: routes[key].component
		}
	})
})