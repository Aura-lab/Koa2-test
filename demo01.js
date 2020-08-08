// function getSome(){
//     return 'something';
// }


// async function testAsync(){
//     return 'Hello async';
// }
// async function test(){
//     const v1 = await getSome();
//     const v2 = await testAsync();
//     console.log(v1,v2);
// }


// test();

function takeLong(){
    return new Promise(resolve=>{
        setTimeout(()=>resolve("long_time_value"), 1000);
    });
}

async function test(){
    const v = await takeLong();
    console.log(v);
}
test();