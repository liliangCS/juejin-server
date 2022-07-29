const { request1 } = require("./index")
const { commentsUrl } = require("./urls")

class CommentService {
  async getCommentsData(articleId, pageIndex) {
    const res = await request1.post(commentsUrl, {
      client_type: 2608,
      cursor: `${pageIndex * 20}`,
      item_id: articleId,
      item_type: 2,
      limit: 20,
      sort: 0
    })
    return res.data
  }
}

module.exports = new CommentService()