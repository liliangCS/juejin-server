const { getArticleListData, getComArticleListData } = require("../service/article-service")

class ArticleController {
  // 根据分类获取文章列表
 async getArticleList(ctx, next) {
  const { cateId, pageIndex } = ctx.request.body
  ctx.body = await getArticleListData(cateId, pageIndex)
 }
 // 获取综合文章列表
 async getComArticleList(ctx, next) {
  const { pageIndex } = ctx.request.body
  ctx.body = await getComArticleListData(pageIndex)
 }
}

module.exports = new ArticleController()