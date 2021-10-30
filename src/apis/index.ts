import request from '@utils/request'

// 登录
export function SignIn(params: any) {
	let api: string = "sign/in";
	return request({
		url: api,
		method: 'POST',
		data: params,
	})
}

// 注册
export function SignUp(params: any) {
	let api: string = "sign/up";
	return request({
		url: api,
		method: 'POST',
		data: params,
	})
}
