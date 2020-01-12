const Koa = require('koa')
const Static = require('koa-static')
const app = new Koa();



app.use(Static('./public'))
// app.use(async(ctx) => {
//     ctx.body = '你好世界'
// })
app.listen(3000,function() {
    console.log('app 开始了?')
})