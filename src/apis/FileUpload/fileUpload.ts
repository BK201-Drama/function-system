import axios from '../http';

const api = {
  upload (formData: any): Promise<any> {
    return axios.request({
      method: 'post',
      url: '/upload',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formData
    })
  },
}

export default api;