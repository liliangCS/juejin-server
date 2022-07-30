const { getArticleListData, getComArticleListData, getTagArticleListData } = require("../service/article-service")

class ArticleController {
  // 根据分类(标签为全部)获取文章列表
 async getArticleList(ctx, next) {
  const { cateId, pageIndex } = ctx.request.body
  ctx.body = await getArticleListData(cateId, pageIndex)
 }
 // 获取综合文章列表
 async getComArticleList(ctx, next) {
  const { pageIndex } = ctx.request.body
  ctx.body = await getComArticleListData(pageIndex)
 }
  // 根据分类 + 标签获取文章列表
 async getTagArticleList(ctx, next) {
  const { cateId, tagId, lastCursor } = ctx.request.body
  lastCursor = lastCursor || "0"
  ctx.body = await getTagArticleListData(cateId, tagId, lastCursor)
 }
}

module.exports = new ArticleController()