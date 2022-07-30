const Router = require("koa-router")
const { getArticleList, getComArticleList } = require("../controller/article-controller")

const router = new Router({ prefix: "/api/article" })

// 根据分类获取文章列表
router.post("/", getArticleList)
// 获取综合文章列表
router.post("/comprehensive", getComArticleList)

module.exports = router