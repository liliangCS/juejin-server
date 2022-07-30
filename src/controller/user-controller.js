const { getAuthorRankData } = require("../service/user-service")

class UserController {
  async getAuthorRank(ctx, next) {
    const res = await getAuthorRankData()
    ctx.body = res
  }
}

module.exports = new UserController()