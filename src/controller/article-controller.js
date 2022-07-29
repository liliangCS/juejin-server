const { getArticleListData } = require("../service/article-service")

class ArticleController {
 async getArticleList(ctx, next) {
  const { cateId, pageIndex } = ctx.request.body
  ctx.body = await getArticleListData(cateId, pageIndex)
 } 
}

module.exports = new ArticleController()