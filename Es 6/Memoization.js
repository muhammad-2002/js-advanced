/// Now I am discribe Memoization:

// function add(...x){
//     return x.reduce((sum,cur)=> sum +cur);
// }

// const Memoization = function(func){
//     const cash ={};
//     return (...x)=>{
//         console.log(cash)
//         const key =JSON.stringify(x)
//         if(cash[key]){
//             return cash[key]
//         }
//         else{
//             const result = func(...x);
//             cash[key] =result;
//             return result;
//         }

//     }
// }

// const calculation = Memoization(add);
// console.log(calculation(1000,111))
// console.log(calculation(1000,111))



// function add(...x){
//     return 10 + x;
// }

// //Higerorder Function 

// const memo = (func)=>{
//     const cache ={}
//     console.log(cache)
//     return function(x){
//         console.log("result from cache")
//         if(cache[x]){
//             return cache[x];
//         }else{
//             console.log("result from calculation")
//             const result  = func(x);
//             cache[x]=result;
//             return result;
//         }

//     }

// }

// const calculation = memo(add);