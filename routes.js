const Router = require('koa-router')
const Koa = require('koa')
const Static = require('koa-static')
const bodyParser = require('koa-bodyparser')
const Route = require('koa-route')
const fs = require('fs')

let router = new Router()
const app = new Koa();

let routes =function () {
    router.get('/home', async(ctx)=>{
        ctx.body = ctx.query
    })
    router.post('/post', async(ctx)=>{
        ctx.body = '<h1 style="color:red"> 不需要加next 😘 </h1>'
    })
    router.post('/login', async(ctx)=>{
        let data = ctx.request.body
        ctx.body = data
    })
    router.post('/write', async(ctx)=>{
        let data = ctx.request.body
        ctx.body = data
    })
    app.use(router.routes());

}

module.exports = routes