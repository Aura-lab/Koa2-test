const Koa = require('koa');
const app = new Koa();
app.use(async(ctx)=>{
    let url = ctx.url;
   // console.log(url);
   
    let request = ctx.request;
    let req_query = request.query;
    let req_querystring = request.querystring;

    // 从ctx 直接获取get请求
    let ctx_query = ctx.query;
    let ctx_querystring = ctx.querystring;
    ctx.body={
        url,
        req_query,
        req_querystring
    }
});

app.listen(3000,()=>{
    console.log('demo server port 3000');
})