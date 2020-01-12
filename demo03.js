const Koa = require('koa')
const app = new Koa()

app.use(async ctx => {
    if (ctx.url === '/' && ctx.method === 'GET') {
        // 显示表单页面；
        let html = `
            <h1>请求Koa request GET</h1>
            <form method="POST" action="/">
                <p>userName</p>
                <input name="userName" /><br />
                <p>age</p>
                <input name="webSite" /><br />
                <button type="submit">提交</button>
            </form>
        `
        ctx.body = html
    } else if (ctx.url === '/' && ctx.method === 'POST') {
        ctx.body = '接收到POST参数'
    } else {
        ctx.body = '<h1>404</h1>'
    }
    
})

app.listen(3000,()=>{console.log('监听')})