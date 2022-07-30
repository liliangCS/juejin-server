const { getCategoryData, getTagListData } = require("../service/category-service")

class CategoryController {
  async getCategory(ctx, next) {
    const res = await getCategoryData()
    ctx.body = res
  }

  async getTagList(ctx, next) {
    const { cateId } = ctx.request.body
    const res = await getTagListData(cateId)
    ctx.body = res
  }
}

module.exports = new CategoryController()