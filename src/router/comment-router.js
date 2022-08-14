const Router = require("koa-router")
const { getComments, getHotComments } = require("../controller/comment-controller")

const router = new Router({ prefix: "/api/comment" })

// 获取全部评论
router.post("/", getComments)
// 获取热门评论
router.post("/hot", getHotComments)

module.exports = router