const { request1 } = require("./index")
const { articleListUrl, articleListUrl2 } = require("./urls")

class ArticleService {
  // 根据分类获取文章列表
  async getArticleListData(cateId, pageIndex) {
    const res = await request1.post(articleListUrl, {
      cate_id: cateId,
      cursor: String(pageIndex),
      id_type: 2,
      limit: 20,
      sort_type: 200
    })
    return res.data
  }

  // 获取综合文章列表
  async getComArticleListData(pageIndex) {
    const res = await request1.post(articleListUrl2, {
      client_type: 2608,
      cursor: String(pageIndex),
      id_type: 2,
      limit: 20,
      sort_type: 200,
    })
    return res.data
  }
}

module.exports = new ArticleService()