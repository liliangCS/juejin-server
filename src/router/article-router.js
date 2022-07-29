const Router = require("koa-router")
const { getArticleList } = require("../controller/article-controller")
const router = new Router({ prefix: "/article" })

router.post("/", getArticleList)
module.exports = router