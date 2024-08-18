// CALL BACKS: passing a function as parameter in aonother function

// function getdata(dataId, getnextdata){
    
//     setTimeout(()=>{
//         console.log("data", dataId);
//     if(getnextdata){
//         getnextdata();
//     }
//     }, 2000); //2s=2000ms
// }

//CALL BACK HELL: problem occurs due to Nested call backs, bad way of programming

// getdata(1, ()=>{
//     console.log("Getting data 2....", );
//     getdata(2, ()=>{
//         console.log("Getting data 3....", );
//         getdata(3, ()=>{
//             console.log("Getting data 4......");
//             getdata(4);
//         });
//     });
// });

//PROMISES: To solve the problem of call back hell, eventual completion of task

// let promise= new Promise((resolve, reject)=>{
//     console.log("Displaying Promise");
    // (state will be pending)
    // resolve(123);
    //(state will be fulfilled)
    // reject("error");
    //(state will be rejected)
// })


// function getdata(dataId, getnextdata){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data", dataId);
//             resolve("Successful");
//             if(getnextdata){
//                 getnextdata();
//             }
//         }, 3000)
//     })
// }


//THEN 

// const promisefunc=(()=>{
//     return new Promise((resolve, reject)=>{
//         console.log("This is a function of promise");
//         resolve("Result");
// })
// });

// let mypromise=promisefunc();

// mypromise.then((res)=>{
//     console.log("Promise 1 is Fulfilled,", res);
// });


//CATCH

// const promisefunc2=(()=>{
//     return new Promise((resolve, reject)=>{
//         console.log("This is another function of promise");
//         reject("Error Occured");
//     })
// });

// let mypromise2=promisefunc2();

// mypromise2.catch((err)=>{
//     console.log("Promise 2 is rejected,", err)
// });

//PROMISE CHAINING : USING NESTED THEN AND CATCH FOR ASYNC 


// function asyncfunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data 1");
//             resolve("Success");
//         }, 2000);
//     });
// }

// function asyncfunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data 2");
//             resolve("Success");
//         }, 2000);
//     });
// }

// function asyncfunc3(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Data 3");
//                 reject("Error Occured");
            
//         },2000)
//     });
// }

// console.log("Fetching data 1.....");
// let p1 = asyncfunc1();
// p1.then((res) => {
//     console.log("fetching data 2......");
//     let p2 = asyncfunc2();
//     p2.then((res) => {
//         console.log("Fetching data 3......");
//         let p3=asyncfunc3();
//         p3.catch((err)=>{
//             console.log(err);
//         });
//     });
// });


//ASYNC-AWAIT

// function asyncfunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data 1");
//             resolve("Success");
//         }, 2000);
//     });
// }

// function asyncfunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data 2");
//             resolve("Success");
//         }, 2000);
//     });
// }

// async function getdata(){
//     console.log("fetching data 1....");
//     await asyncfunc1();
//     console.log("fetching data 2....");
//     await asyncfunc2();
// }

// getdata();


// IIFE: Immediately invoked function expression; function doesnt need to be called separately
//Syntax of IIFE: (entire functiom without name)();
// used for the functions which only requires to be called once especially in API calling 

// function asyncfunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data 1");
//             resolve("Success");
//         }, 2000);
//     });
// }

// function asyncfunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data 2");
//             resolve("Success");
//         }, 2000);
//     });
// }

// (
//     async function(){
//     console.log("fetching data 1....");
//     await asyncfunc1();
//     console.log("fetching data 2....");
//     await asyncfunc2();
// }

// ) ();

//FETCHING API: Application Programming Interface


const URL="https://cat-fact.herokuapp.com/facts";
let catfacts= document.querySelector("#facts");
console.log(catfacts);

const getapi= async()=>{
    console.log("Fetching API.....");
    let response= await fetch(URL);
    console.log("Response of API in unreadable format",response)
    console.log("Converting the format of API");
    let APIformat= await response.json();
    console.log("API in readable format",APIformat);
   console.log("Here is the fact 1: ", APIformat[0].text)
   console.log("Here is the fact 2: ", APIformat[1].text)
   console.log("Here is the fact 3: ", APIformat[2].text)
   catfacts.innerText=APIformat[0].text;

}
getapi();




