const Router = require("koa-router")
const { getArticleList, getComArticleList, getTagArticleList, getArticleColumn, getSimilarArticle, getRecommendArticle } = require("../controller/article-controller")

const router = new Router({ prefix: "/api/article" })

// 根据分类(标签为全部)获取文章列表
router.post("/", getArticleList)
// 获取综合文章列表
router.post("/comprehensive", getComArticleList)
// 根据分类 + 标签获取文章列表
router.post("/tag", getTagArticleList)
// 获取文章专栏
router.post("/column", getArticleColumn)
// 获取相关文章
router.post("/similar", getSimilarArticle)
// 获取相关推荐
router.post("/recommend", getRecommendArticle)

module.exports = router