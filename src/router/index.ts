import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw} from "vue-router"
import beforeEach from "./before";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "index",
		component: () => import("../pages/index")
	},
	{
		path: "/home",
		name: "home",
		meta: {
			auth: true
		},
		component: () => import("../pages/home"),
		children: [
			{
				path: "welcome",
				name: "welcome",
				meta: {
					auth: true
				},
				component: () => import("../pages/home/welcome.vue")
			},
		],
	},
	{
		path: '/404',
		name: '404',
		component: () => import("../pages/error/404"),
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
});
/**
 * 路由守卫
 */
router.beforeEach((guard) => {
	beforeEach.checkAuth(guard, router);
});

/**
 * 路由错误回调
 */
router.onError((handler) => {
	console.log("error:", handler);
});

export default router;
