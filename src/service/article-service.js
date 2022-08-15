const { request1, request2 } = require("./index")
const { articleListUrl, articleListUrl2, articleListUrl3, articleColumnUrl, similarArticleUrl, recommendArticleUrl } = require("./urls")

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

  // 获取文章专栏
  async getArticleColumnData(articleId) {
    const res = await request1.post(articleColumnUrl, {
      article_id: articleId,
      cursor: "0",
      limit: 10
    })
    return res.data
  }

  // 获取相关文章接口
  async getSimilarArticleData(articleId, userId) {
    const res = await request1.post(similarArticleUrl, {
      cursor: "0",
      id_type: 2,
      item_id: articleId,
      user_id: userId
    })
    return res.data
  }

  // 获取相关推荐接口
  async getRecommendArticleData(articleId, pageIndex) {
    const res = await request1.post(recommendArticleUrl, {
      cursor: `${pageIndex * 20}`,
      id_type: 2,
      item_id: articleId,
      sort_type: 200
    })
    return res.data
  }

  // 获取文章详情
  async getDetailArticleData(articleId) {
    const res = await request2.get(`/post/${articleId}`)
    return res.data
  }
}

module.exports = new ArticleService()