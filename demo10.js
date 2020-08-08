const Koa = require('koa');
const app = new Koa();
app.use(async(ctx)=>{
    //index 是哪里
    if(ctx.url ==='/index'){
        ctx.cookies.set(
            'MyName','Aura',{
                domain:'127.0.0.1',
                path:'/index',
                maxAge:1000*60*60*24,
                expires:Date('2022-12-31'),
                httpOnly:false,
                overwrite:false
            }
        );
        ctx.body = 'cookie is ok'
    }else{
        if(ctx.cookies.get('MyName')){
            ctx.body = ctx.cookies.get('MyName');
        }else{
            ctx.body='cookie is none'
        }
        
    }
});

app.listen(3000,()=>{
    console.log('demo server port 3000');
})
//删掉index 还是 MyName 不是 Cookie is none