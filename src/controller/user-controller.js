const { getAuthorRankData } = require("../service/user-service")

class UserController {
  async getAuthorRank(ctx, next) {
    ctx.body = await getAuthorRankData()
  }
}

module.exports = new UserController()