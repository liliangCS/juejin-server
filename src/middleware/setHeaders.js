module.exports = async function setHeaders(ctx, next) {
  ctx.set('Access-Control-Allow-Origin', '*');
  await next();
}