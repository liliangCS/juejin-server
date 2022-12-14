const Koa = require("koa")
const bodyParser = require("koa-bodyparser")
const setHeaders = require("./middleware/setHeaders")
const useRoutes = require("./router")
require("./config/color")

const app = new Koa()
app.use(setHeaders)
app.use(bodyParser())
useRoutes(app)

app.listen(9999, () => {
  console.log("服务启动于: http://127.0.0.1:9999".help)
  console.log("在线接口文档: https://www.apifox.cn/apidoc/project-1372700".help)
})