// Src/services/axiosService.ts

import axios, {type AxiosInstance, type AxiosRequestConfig, type AxiosResponse} from 'axios';

type ResponseData<T = any> = {
	code: number;
	data: T;
	message: string;
};

// 创建 axios 实例

const axiosInstance: AxiosInstance = axios.create({
	// eslint-disable-next-line @typescript-eslint/naming-convention
	baseURL: 'https://api.example.com',
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
	},
});

// 请求拦截器

axiosInstance.interceptors.request.use(config => {
	// 在发送请求之前做些什么，例如在请求头中添加 token
	// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
	config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;

	return config;
}, async error =>
// 对请求错误做些什么
	Promise.reject(error),
);

// 响应拦截器

axiosInstance.interceptors.response.use((response: AxiosResponse<ResponseData>) => {
	// 对响应数据做点什么，例如处理返回的数据结构
	if (response.status === 200) {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return response.data.data;
	}

	// 可以在这里对返回的错误代码进行统一处理
	console.error('An error occurred:', response.data.message);
	return Promise.reject(response.data.message);
}, async error => {
	// 对响应错误做点什么，例如处理网络错误
	console.error('An error occurred:', error);
	return Promise.reject(error);
});

export default axiosInstance;
