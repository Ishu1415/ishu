//async: it is a type of code which is executing the other code simulatinousaly, bina program ko roka.
//async handling: three ways of handling=> 1)callback , 2)promises 3)async-await

//for example:setTimeout:this code is run at one time after a particular interval of time
// console.log(1);
// setTimeout(()=>{
// console.log(2);
// },2000);
// console.log(3);

//1)callback: pass function as an argument. here the problem with callback is that nested callback
// function greet(name,cb){
//     console.log("hello",name);
//     cb();
// }
// function bye(){
//     console.log("bye");
// }
// greet("ishu",bye);

//web api's: setinterval, setTimeout
//ques.1: let timer=setTimeout(()=>{
//     console.log("hello world");
// },3000);
// clearTimeout(timer);

//ques.2: let timer=setInterval(()=>{
//     console.log("hello ishu");
// },1000);
// clearTimeout(timer);

//ques.3: 
//let count=0;
// let timer=setInterval(()=>{
//     console.log(count);
//     count++;
//     if(count==8){
//         clearInterval(timer);
//     }
// },1000);

//ques.4:
/*let count=5;
let timer=setInterval(()=>{
    console.log(count);
    count--;
    if(count==0){
        clearInterval(timer);
    }
},1000);
*/
 
//ques.5:
/*function table(n){
    let count=1;
let timer=setInterval(()=>{
    console.log(n*count);
    count++;
    if(count==11){
        clearInterval(timer);
    }
},1000);
}
table(13);
*/

//ques.6:
/*function fetchdata(cb){
    setTimeout(()=>{
        console.log("data is fetched");
        cb();
    },2000);
}
    function process(){
        console.log("data is processed");
    }
fetchdata(process);
*/

//ques.7:
/*
function fn1(cb){
    setTimeout(()=>{
        console.log("step1");
        cb();
    },2000);
}
function fn2(cb){
    setTimeout(()=>{
        console.log("step2");
        cb();
    },2000);
}
function fn3(cb){
    setTimeout(()=>{
        console.log("step3");
        cb();
    },2000);
}
fn1(()=>{
    fn2(()=>{
        fn3(()=>
        {
            console.log("all is done");
        })
    })
})
*/

//promises// these two parameter resolve||reject//kam ho gya ya nhi huya //data update in an database use it 
//states:->pending,fulfilled,rejected

/*let promise=new Promise((resolve,reject)=>{//resolve and reject are also functions
     let dataUpdated=true
     if(dataUpdated){
        resolve('your credit is received')
     }else{
        reject('he didnt gave my money back')
     }
}).then((msg)=>{    //then handles success one by one
    console.log(msg)
}).catch((err)=>{    //handles errors
    console.log(err)
}).finally(()=>{
    console.log('work is done')
})
*/

//then ,catch,finally bikul default ki tarah work krta h 
//resolve vala then m milta h or reject vala catch m //dono ek sath kabhi work nhi krti h 
//  promise.then((msg)=>{
//     console.log('message',msg)
// })
// promise.catch((err)=>{
//     console.log('error',err)
// })

// function getData(){
//     fetch(url)//make http request,returns promises
//     .then((response)=> response.json())
//     .then((data)=>console.log(data)).
// catch((err)=>console.log(err))
// }
// getData();

//ques.8:create a promise and check the number is odd and even
/*let promise=new Promise((resolve,reject)=>{
    let i=17;
    if(i%2==0)
    {
        resolve("number is even");
    }
    else{
        reject("number is odd");
    }
}).then((msg)=>{
    console.log(msg);
}).catch((err)=>{
    console.log(err);
})
*/

//ques.9: create a promise that return a number, chain.then() to multiply by 2,multiply by 3
/*let promise=new Promise((resolve,reject)=>{
    resolve(2);
}).then((msg)=>{
    console.log(msg);
    return msg*2;
}
).then((num)=>{
    console.log(num);
    return num*3;
})
*/

//ques.10: check username and password with a promise
let promise=new Promise((resolve,reject)=>{
    let username="abc@gmail.com";
    let password="12345678";
    setTimeout(()=>{
    if(username,password){
        resolve("username and password is correct");
    }
    else{
        reject("username and password is not correct");
    }}
,1000);
}
).then((msg)=>{
    console.log(msg);
}).catch((err)=>{
    console.log(err);
})
