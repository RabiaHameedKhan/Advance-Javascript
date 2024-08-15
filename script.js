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


function getdata(dataId, getnextdata){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data", dataId);
            resolve("Successful");
            if(getnextdata){
                getnextdata();
            }
        }, 3000)
    })
}
