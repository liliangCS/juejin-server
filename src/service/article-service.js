const { request1 } = require("./index")
const { articleListUrl } = require("./urls")

class ArticleService {
  async getArticleListData(cateId, pageIndex) {
    const res = await request1.post(articleListUrl, {
      cate_id: cateId,
      cursor: pageIndex,
      id_type: 2,
      limit: 20,
      sort_type: 200
    })
    return res.data
  }
}

module.exports = new ArticleService()