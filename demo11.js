const Koa = require('koa');
const views = require('koa-views');
const path = require('path');
const app = new Koa();

// node 提供__dirname
//node基础要看
app.use(views(path.join(__dirname,'./view'),{
    extension:'ejs'
}))


app.use(async(ctx)=>{
    let title = 'hello demo11'
    // render?
    await ctx.render('index',{title});

});

app.listen(3000,()=>{
    console.log('port on 3000');
})

