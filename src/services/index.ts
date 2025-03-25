import axios from "axios";
import { message as Message } from "ant-design-vue";

const axiosInstance = axios.create({
  baseURL: "/zjapi",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

// 添加请求拦截器
axiosInstance.interceptors.request.use(
  (config: any) => {
    // 在发送请求之前做些什么
    if (!config.params) {
      config.params = {}; // 如果没有参数对象，则创建一个
    }
    config.params.appsecret = "548a2c2e8a774c75aeb53971ed2c0462"; // 添加 app_key 参数
    return config;
  },
  (error: any) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);

const instance = {
  // 创建一个方法来发送请求
  request: async (method: any, url: string, options = {}) => {
    try {
      // 发送请求
      const response = await axiosInstance({
        method: method,
        url: url,
        ...options,
      });
      return response.data;
    } catch (error: any) {
      Message.error(error.message);
      console.error(
        `Error with ${method.toUpperCase()} request to ${url}:`,
        error,
      );
      throw error;
    }
  },
  get: (url: string, options: any) => instance.request("get", url, options),
  post: (url: string, data: any, options: any = null) =>
    instance.request("post", url, { data, ...options }),
  put: (url: string, data: any, options: any) =>
    instance.request("put", url, { data, ...options }),
  delete: (url: string, options: any) =>
    instance.request("delete", url, options),
};

export default instance;
