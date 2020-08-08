const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router({
    prefix:'/auraproject'
});


//next 是什么？
// [Function: bound dispatch]

router
    .get('/',(ctx, next)=>{
        ctx.body="hello world";
      //  console.log(next);
    })
    .get('/todo',(ctx,next)=>{
        ctx.body="todo page";

    })

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000,()=>{
    console.log('starting at 3000');
});