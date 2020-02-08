const Koa = require('koa')
const Static = require('koa-static')
const bodyParser = require('koa-bodyparser')
const Route = require('koa-route')
const Router = require('koa-router')
const fs = require('fs')

let router = new Router()

const app = new Koa();

app.use(bodyParser())



app.use(Static('./public'))


// app.use(async(ctx,next)=>{
//     if(ctx.url==='/get'&&ctx.method=='GET'){
//         ctx.body = '<button class="btn-red">你好世界</button>'
//     }
//     if(ctx.url==='/post'&&ctx.method=='POST'){
//         let data = ctx.request.body
//         ctx.body = data
//     }
//     next()
// })
router.get('/home', async(ctx)=>{
    ctx.body = ctx.query
})
router.post('/post', async(ctx)=>{
    ctx.body = '<h1 style="color:red"> 不需要加next </h1>'
})
router.post('/login', async(ctx)=>{
    let data = ctx.request.body
    ctx.body = data
})
router.post('/write', async(ctx)=>{
    let data = ctx.request.body
    // ctx.body = data
    let time = new Date().toLocaleString()
    data = 'a = '+JSON.stringify(data);
    txt = data +'    // '+ time +'\r\n'
    fs.appendFileSync('./save.js',txt)
    ctx.body = '成功'
})

// 加载路由中间件
app.use(router.routes());

app.listen(3004,function() {
    console.log('app 开始了? http://localhost:3004')
})

