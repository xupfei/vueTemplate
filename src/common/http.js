import axios from 'axios';
// import store from '@/store';
import currentConfig from './config';
import { Message } from 'element-ui';
import router from '@/router.js';

let service = axios.create({
	baseURL: currentConfig.api,
	timeout: 5000
});

service.interceptors.request.use(
	config => {
		config.headers['Content-Type'] = 'application/json';

		

		return config;
	},
	error => {
		Promise.reject(error);
	}
);

service.interceptors.response.use(
	res => {
		
		return res.data || res;
	},
	error => {
		return Promise.reject(error);
	}
);

export default service;

export const api = currentConfig.api;
