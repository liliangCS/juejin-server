const { getArticleListData, getComArticleListData, getTagArticleListData, getArticleColumnData, getSimilarArticleData, getRecommendArticleData } = require("../service/article-service")

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
  let { cateId, tagId, lastCursor } = ctx.request.body
  lastCursor = lastCursor || "0"
  ctx.body = await getTagArticleListData(cateId, tagId, lastCursor)
 }

  //  获取文章专栏
  async getArticleColumn(ctx, next) {
    const { articleId } = ctx.request.body
    ctx.body = await getArticleColumnData(articleId)
  }

  // 获取相关文章
  async getSimilarArticle(ctx, next) {
    const { articleId, userId } = ctx.request.body
    ctx.body = await getSimilarArticleData(articleId, userId)
  }

  // 获取相关推荐
  async getRecommendArticle(ctx, next) {
    const { articleId, pageIndex } = ctx.request.body
    ctx.body = await getRecommendArticleData(articleId, pageIndex)
  }
}

module.exports = new ArticleController()