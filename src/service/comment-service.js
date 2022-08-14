const { request1 } = require("./index")
const { commentsUrl, hotCommentsUrl } = require("./urls")

class CommentService {
  // 获取全部评论
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
  // 获取热门评论
  async getHotCommentsData(articleId) {
    const res = await request1.post(hotCommentsUrl, {
      item_id: articleId,
      item_type: 2
    })
    return res.data
  }
}

module.exports = new CommentService()