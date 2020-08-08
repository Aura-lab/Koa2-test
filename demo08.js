const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();

//子路由
let home = new Router();
home.get('/aura',async(ctx)=>{
    ctx.body="home aura page";
}).get('/todo', async(cyx)=>{
    ctx.body = 'home todo page';
})

let page = new Router();
page.get('/aura', async(ctx)=>{
    ctx.body="page aura page";
    }).get('/todo', async(ctx)=>{
        ctx.body='page todo page';
    })

//父级路由
let router = new Router();
router.use('/home',home.routes(),home.allowedMethods());
router.use('/page',page.routes(),page.allowedMethods());



app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000,()=>{
    console.log('starting at 3000');
});