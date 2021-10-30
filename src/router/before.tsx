import {Router} from "vue-router";

export default {
	/**
	 * 路由守卫检查权限
	 * @param guard
	 * @param router
	 */
	checkAuth(guard: any, router: Router) {
		//检查路由是否存在
		if (!router.hasRoute(guard.name)) {
			router.push("/404");
			return;
		}
		// 如果需要登录就跳转到登录页
		if (guard.meta.auth) {
			const userinfo = GetMap("userinfo")
			const subdomain = getSubdomain();
			const userDomain = userinfo.domain;
			// 未登录
			if (userDomain === undefined) {
				router.push("/sign/in");
				// 没权限
			}
			// else if (subdomain !== userDomain) {
			// 	router.push("/error/500");
			// }
		}
	}
}
