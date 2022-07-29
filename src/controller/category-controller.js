const { getCategoryData } = require("../service/category-service")

class CategoryController {
  async getCategory(ctx, next) {
    const res = await getCategoryData()
    ctx.body = res
  }
}

module.exports = new CategoryController()