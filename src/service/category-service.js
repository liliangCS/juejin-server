const { request1 } = require("./index")
const { categoryUrl } = require("./urls")

class CategoryService {
  async getCategoryData() {
    const res = await request1.get(categoryUrl)
    return res.data
  }
}

module.exports = new CategoryService()