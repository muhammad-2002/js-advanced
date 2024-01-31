//asyncronus callback promise async await

//callback

// const takeOrder=(customer,callback)=>{
//     console.log(`take order for ${customer}`)
//     callback(customer)

// }

// const processOrder =(customer,callback)=>{
//     console.log(`process order from ${customer}`)

//     setTimeout(()=>{
//         console.log("process compleate")
//         console.log(`order passed from customer ${customer}`)
//         callback(customer)
//     },3000)
    
// }

// const compleateOrder=(customer)=>{
//     console.log(`finised order ${customer}`)
// }

// takeOrder('customer-1',(customer)=>{
//     processOrder(customer,(customer)=>{
//         compleateOrder(customer)

//     })
// })

//promise

// const hasmetting= false;

// const meating = new Promise((resolve,reject)=>{
//     if(!hasmetting){
//         const MettingDetails={
//             Name :"Tecnical Metting",
//             Location:"vartial"

//         }
//         resolve(MettingDetails)
//     }else{
//         reject(new Error("metting is alrady Schedule"))
//     }

// });
// const addToclender =(MettingDetails)=>{
//     const clender = `${MettingDetails.Name} is vary improtant this location ${MettingDetails.Location}`
//     return Promise.resolve(clender);

// }
// meating
//      .then(addToclender)
//      .then((res)=>{
//         console.log(JSON.stringify(res))
//      })
//      .catch((err)=>{
//         console.log(err.message)

//      })


// const promise1= Promise.resolve('hellow world')
// const promise2 = new Promise((resolve,resject)=>{
//     setTimeout(()=>{
//         resolve("hellow world 2")
//     },4000)
    
// })

// Promise.all([promise1,promise2]).then((res)=>{
//     console.log(res)
// })

// Promise.race([promise1,promise2]).then((res)=>{
//     console.log(res)
// })




//async await

const hasmetting= true;

const meating = new Promise((resolve,reject)=>{
    if(!hasmetting){
        const MettingDetails={
            Name :"Tecnical Metting",
            Location:"vartial"

        }
        resolve(MettingDetails)
    }else{
        reject(new Error("metting is alrady Schedule"))
    }

});
const addToclender =(MettingDetails)=>{
    const clender = `${MettingDetails.Name} is vary improtant this location ${MettingDetails.Location}`
    return Promise.resolve(clender);
}

async function mymetting(){
    try{
        const mettingDetails = await meating
    const clender = await addToclender(mettingDetails)

    console.log(clender)
    }
    catch{
        console.log('something wigth wrong')
    }

}
mymetting()