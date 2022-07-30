const { request1 } = require("./index")
const { authorRankUrl } = require("./urls")

class UserService {
  async getAuthorRankData() {
    const res = await request1.get(authorRankUrl)
    return res.data
  }
}

module.exports = new UserService()