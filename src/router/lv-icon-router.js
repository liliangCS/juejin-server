const Router = require("koa-router")
const router = new Router({ prefix: "/api/lvimg" })

const lvArr = [
  null,
  "1.9d93e13",
  "2.99ba5b2",
  "3.7938ebc",
  "4.a78c420",
  "5.d08789d",
  "6.b69935b",
  "7.5da15b8",
  "8.c7e4c3c"
]

router.get("/:level", (ctx, next) => {
  const { level } = ctx.request.params
  ctx.body = { imgUrl: `https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-${lvArr[level]}.png` }
})
module.exports = router