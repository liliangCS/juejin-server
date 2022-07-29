const Router = require("koa-router")
const { getCategory } = require("../controller/category-controller")
const router = new Router({ prefix: '/category' })

router.get('/', getCategory)
module.exports = router