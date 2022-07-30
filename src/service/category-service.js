const { request1 } = require("./index")
const { categoryUrl, tagUrl } = require("./urls")

class CategoryService {
  async getCategoryData() {
    const res = await request1.get(categoryUrl)
    return res.data
  }

  async getTagListData(cateId) {
    const res = await request1.post(tagUrl, {
      cate_id: cateId
    })
    return res.data
  }
}

module.exports = new CategoryService()