import http, { api } from '@/common/http';

export default {
	// 登录
	login: body => http.post(`/cms/manager/user/login`, body),
	// 登出
	signOut: () => http.get(`/cms/manager/user/logout`),
	// 验证码
	getCode: api +'/cms/manager/user/getCode'
};
