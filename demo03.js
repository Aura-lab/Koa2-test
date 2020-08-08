const Koa = require('koa');
const app = new Koa();

app.use(async(ctx)=>{
    if(ctx.url==='/' && ctx.method==='GET'){
        //显示表单页面
        let html=`
        <h1>Koa2  request POST</h1>
        <form method='POST' action='/'>
        <p>userName</p>
        <input name='userName'/><br/>
        <p>age</p>
        <input name='age'/><br/>
        <p>website</p>
        <input name='website'/><br/>
        <button type='submit'>submit</button>
        </form>
        `;
        ctx.body = html;
    }else if(ctx.url==='/' && ctx.method ==='POST'){
        let postdata = await parsePostData(ctx);
        ctx.body=postdata
        ;

    }else{
        ctx.body = '<h1>404 NOT FOUND</h1>';

    }
});

function parsePostData(ctx){
    return new Promise((resolve, reject)=>{
        try{
            let postdata="";
            
            ctx.req.on('data',(data)=>{
                postdata+=data;
            });
            ctx.req.addListener('end',function(){

                let parseData = parseQueryStr(postdata);
                resolve(parseData);
            })
        }catch(error){
            reject(error);
        }
    });
}

function parseQueryStr(querystr){
    let queryData = {};
    let queryStrList = querystr.split('&');
    console.log(queryStrList);
    console.log(queryStrList.entries());

    for(let[index,querystr] of queryStrList.entries()){
        let itemList=querystr.split('=');
        console.log(itemList);
        queryData[itemList[0]]=decodeURIComponent(itemList[1]);

    }
    return queryData;

}
app.listen(3000,()=>{
    console.log('port start at 3000');
});

