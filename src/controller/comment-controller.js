const { getCommentsData } = require("../service/comment-service")
class CommentController {
  async getComments(ctx, next) {
    const { articleId, pageIndex } = ctx.request.body
    const res = await getCommentsData(articleId, pageIndex)
    ctx.body = res
  }
}

module.exports = new CommentController()