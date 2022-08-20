const Router = require("koa-router")
const router = new Router({ prefix: "/api/lvimg" })

const lvArr1 = [
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

const lvArr2 = [
  null,
  "9b2f31c663d17de59dd9e5fff272bb85",
  "69eb0ad2f93abf938e832fe53b979c10",
  "65a6a28f15d70e5a77bf881c5ec5340d",
  "8c6985e2aa4c06f307ae3734da4b43ac",
  "cf19b122213ebdbd25b66f02500b8c27",
  "70f1e5e3a2fde62e0d623009ab80cb12"
]

router.get("/:level", (ctx, next) => {
  const { level } = ctx.request.params
  const imgUrl = level == 0 ? "" : `https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-${lvArr1[level]}.png`
  ctx.body = {
    err_no: 0,
    imgUrl
  }
})

router.get("/jc/:level", (ctx, next) => {
  const { level } = ctx.request.params
  const imgUrl = level == 0 ? "" : `https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/${lvArr2[level]}.svg`
  ctx.body = {
    err_no: 0,
    imgUrl
  }
})

module.exports = router