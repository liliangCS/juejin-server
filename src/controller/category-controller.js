const { getCategoryData, getTagListData } = require("../service/category-service")

class CategoryController {
  async getCategory(ctx, next) {
    ctx.body = await getCategoryData()
  }

  async getTagList(ctx, next) {
    const { cateId } = ctx.request.body
    ctx.body = await getTagListData(cateId)
  }
}

module.exports = new CategoryController()