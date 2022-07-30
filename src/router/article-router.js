const Router = require("koa-router")
const { getArticleList, getComArticleList, getTagArticleList } = require("../controller/article-controller")

const router = new Router({ prefix: "/api/article" })

// 根据分类(标签为全部)获取文章列表
router.post("/", getArticleList)
// 获取综合文章列表
router.post("/comprehensive", getComArticleList)
// 根据分类 + 标签获取文章列表
router.post("/tag", getTagArticleList)

module.exports = router