const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    let url = ctx.url
    let request = ctx.request
    let req_query = request.query; // 这是对象。
    let req_querystring = request.querystring; // 这是对象。

    ctx.body = {
        url,
        req_query,
        req_querystring
    }
})
app.listen(3001, () => { console.log('3000连接') })