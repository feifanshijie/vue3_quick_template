import Axios from 'axios'
import {GetMap} from "@utils/cache";
import {App} from "@configs/app";

declare module 'axios' {
	interface AxiosInstance {
		(config: AxiosRequestConfig): Promise<any>
	}
}

const axios = Axios.create({
	headers: {
		'Content-Type': 'application/json',
	},
	timeout: 60000,
	baseURL: App.apiBaseURL,
	withCredentials: true
})

// 请求拦截
axios.interceptors.request.use(req => {
	const userinfo = GetMap("userinfo")
	const token = [null, undefined, ""].includes(userinfo) ? "" : userinfo.token;
	if (token){
		if (req.headers){
			req.headers['Authorization'] = token;
		}
	}
	return req
})

// 响应拦截
axios.interceptors.response.use(
	response => {
		return response.data
	},
	error => {
		// 响应失败统一处理
		const { response } = error
		if (response) {
			switch (response.status) {
				// case 400:
				// 	window.$vm.$message.error('请求无效')
				// 	break
				// case 401:
				// 	window.$vm.$message.error({ message: '尚未登录请重新登录' })
				// 	break
				// case 403:
				// 	window.$vm.$message.error('您没有权限这样做，请联系管理员')
				// 	break
				// case 404:
				// 	window.$vm.$message.error('请求未找到')
				// 	break
				// case 500:
				// 	window.$vm.$message.error('系统异常')
				// 	break
				// case 504:
				// 	window.$vm.$message.error('请求超时，请稍后再试')
				// 	break
				// default:
				// 	window.$vm.$message.error('系统异常')
				// 	break
			}
		}
		return Promise.reject(error)
	}
)
export default axios;
