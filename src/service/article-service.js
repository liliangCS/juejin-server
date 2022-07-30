const { request1 } = require("./index")
const { articleListUrl, articleListUrl2, articleListUrl3 } = require("./urls")

class ArticleService {
  // 根据分类(标签为全部)获取文章列表
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

  // 根据分类 + 标签获取文章列表
  async getTagArticleListData(cateId, tagId, lastCursor) {
    const res = await request1.post(articleListUrl3, {
      cate_id: cateId,
      cursor: lastCursor,
      id_type: 2,
      limit: 20,
      sort_type: 200,
      tag_id: tagId
    })
    return res.data
  }
}

module.exports = new ArticleService()