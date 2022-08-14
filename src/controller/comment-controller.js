const { getCommentsData, getHotCommentsData } = require("../service/comment-service")
class CommentController {
  // 获取全部评论
  async getComments(ctx, next) {
    const { articleId, pageIndex } = ctx.request.body
    ctx.body = await getCommentsData(articleId, pageIndex)
  }
  // 获取热门评论
  async getHotComments(ctx, next) {
    const { articleId } = ctx.request.body
    ctx.body = await getHotCommentsData(articleId)
  }
}

module.exports = new CommentController()