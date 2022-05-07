import axios from '../http';

interface accountAndPassword {
  account: string;
  password: string
}

interface updatePassword extends accountAndPassword {
  newPassword: string
}

const api = {
  login: (data: accountAndPassword): Promise<any> => {
    return axios.request({
      method: 'post',
      url: '/v1/login',
      data
    });
  },

  sign: (data: accountAndPassword): Promise<any> => {
    return axios.request({
      method: 'post',
      url: '/v1/sign',
      data
    });
  },

  forgetPassword: (data: updatePassword): Promise<any> => {
    return axios.request({
      method: 'post',
      url: '/v1/forget',
      data
    })
  }
}

export default api;