import axios from 'axios';

const $axios = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export class BaseApi {
  folder;
  lang;
  url = '/api/catalog3/v1/';

  constructor(folderApi, currentLang) {
    this.folder = folderApi;
    this.lang = currentLang;
  }

  async get(params) {
    let url = this.url + this.folder;

    if (this.lang) {
      url = '/' + this.lang + url;
    }

    return await $axios({
      url,
      params,
    }).catch((err) => {
      console.log(err);
    });
  }
}
