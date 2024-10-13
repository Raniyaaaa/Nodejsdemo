let product=(a,b)=>a*b;
console.log(product(2,3));

const Arrayss=['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon']
const transform=Arrayss.map(item=>item===' '?'empty string':item)
console.log(transform)

// //Promises
// console.log("a");
// console.log("b");
// const promise1=()=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("c");
//         },3000)
//     })
// }
// const promise2=()=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("d");
//         },0)
//     })
// }

// promise1()
//     .then((result)=>{
//         console.log(result) 
//         return promise2()  
//         .then((result)=>{
//             console.log(result)
//             console.log("e")
//     })
// }) 

// //Async await

// console.log("a");
// console.log('b');

// const execute=async()=>{

//     await new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("c")
//             resolve();
//         },3000)
        
//     })

//     await new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("d");
//             resolve();
//         },0)
        
//     })
//     console.log("e");
// }
// execute();

//Promise and Async await
console.log("a");
console.log("b");
const promise1=()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("c");
            resolve();
        },3000)
    })
}
const promise2=()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("d");
            resolve();
        },0)
    })
}

const execute=async()=>{
    await promise1();
    await promise2();
    console.log("e")
}
execute();