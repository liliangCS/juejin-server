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
const request2 = new Request("https://juejin.cn")
// 等级图标
const request3 = new Request("https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img")
module.exports = {
  request1,
  request2,
  request3
}