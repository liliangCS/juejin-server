const axios = require("axios")

class Request {
  constructor(baseURL, headers) {
    this.instance = axios.create({
      baseURL,
      headers
    })
  }

  get(url, params) {
    return this.instance.request({url, params, method: "GET"})
  }

  post(url, data) {
    return this.instance.request({url, data, method: "POST"})
  }
}

const request1 = new Request("https://api.juejin.cn")
module.exports = {
  request1
}