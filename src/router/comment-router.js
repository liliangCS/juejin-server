const Router = require("koa-router")
const { getComments } = require("../controller/comment-controller")

const router = new Router({ prefix: "/comment" })

router.post("/", getComments)

module.exports = router