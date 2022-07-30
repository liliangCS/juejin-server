const Router = require("koa-router")
const { getAuthorRank } = require("../controller/user-controller")
const router = new Router({ prefix: "/api/user" })

router.get("/rank", getAuthorRank)

module.exports = router