const Koa = require('koa');
const path = require('path');
const static = require('koa-static');

const app = new Koa();

const staticPath = './static';

app.use(static(path.join(__dirname,staticPath)));

app.use(async(ctx)=>{
    ctx.body = 'hello demo12'
    })
app.listen(3000,()=>{
    console.log('demo 12 port 3000');
})
