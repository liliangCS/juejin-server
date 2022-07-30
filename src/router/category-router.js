const Router = require("koa-router")
const { getCategory, getTagList } = require("../controller/category-controller")

const router = new Router({ prefix: "/api/category" })

router.get('/', getCategory)
router.post('/tag', getTagList)

module.exports = router