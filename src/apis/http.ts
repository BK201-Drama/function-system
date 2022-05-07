import axios from 'axios';

// 最好设置一下初始值，不然走查代码的时候会导致BASEURL不知道是什么值
let BASEURL: string = 'http://127.0.0.1:5001/api';
// if (process.env.NODE_ENV === 'development') {
//   BASEURL = 'http://127.0.0.1:5001/api';
// } else if (process.env.NODE_ENV === 'test') {
//   BASEURL = 'http://127.0.0.1:5001/api';
// } else if (process.env.NODE_ENV === 'production') {
//   BASEURL = 'http://127.0.0.1:5001/api';
// } else {
//   BASEURL = 'http://127.0.0.1:5001/api';
// }

const instance = axios.create({
  baseURL: BASEURL,
  timeout: 100000
})

instance.interceptors.request.use(
  function <T>(config: T): T {
    return config;
  },
  function <T>(error: T): Promise<T> {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function <T>(res: T): T {
    return res
  },
  function <T>(error: T): Promise<T> {
    return Promise.reject(error);
  }
);

export default instance;