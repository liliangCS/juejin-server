const { getCommentsData } = require("../service/comment-service")
class CommentController {
  async getComments(ctx, next) {
    const { articleId, pageIndex } = ctx.request.body
    ctx.body = await getCommentsData(articleId, pageIndex)
  }
}

module.exports = new CommentController()