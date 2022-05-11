import { request } from 'http';
import axios from '../http';

const api = {
  // axios不允许传输blobs对象，需要重新封装
  upload (formData: any): Promise<any> {
    return axios.request({
      method: 'post',
      url: '/upload',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      responseType: 'blob',
      data: formData
    })
  },
  // 新的upload
  // uploadNew (formData: any, url: string): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     let xhr = new XMLHttpRequest();
  //     xhr.open('POST', url);
  //     xhr.onreadystatechange = () => {
  //       if (xhr.readyState === 4) {
  //         let res = 
  //       }
  //     }
  //   })
  // }
}

export default api;