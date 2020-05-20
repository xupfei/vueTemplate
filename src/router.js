import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
const context = require.context('./views/pages', true, /_res.js$/);

let routerAll = [];
context.keys().map(file => {
	const _res = context(file).default;
	_res.map(item => routerAll.push(item));
});

const router = new Router({
	routes: [
		{
			path: '/login',
			name: '登录',
			component: resolve => require(['@/views/login/login'], resolve),
			meta: { show: '/login', title: '登录' }
		},
		{
			path: '/',
			redirect: '/login'
		}
	]
});

router.beforeEach((to, from, next) => {
	next()
});

const authRouterMap = routerAll;

router.addRoutes(authRouterMap);

export default router;
