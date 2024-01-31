//first way.....................
// var num1= 3;
// var num2=3;

// var sum =function(){
//     return num1 + num2; // return scope > global>num 1,2 
                           //This is closer
// }
// console.dir(sum)

//when..............

// var num1= 3;
// var num2=3;

// var sum =function(){
//     var num2=3;
//     return function(){      
//         return num1 + num2; //browser will show num 2 is closer
//     }
   

// }
// var result =sum();
// console.dir(result);

// private poperty secure with closer

// function bankAccount(initialbalance){
//     var balance = initialbalance;
//     return function(){
//         return balance;                //blance is a closer 
//     }
// }

// var showblance = bankAccount(100000);
// console.dir(showblance())




// var num1= 3;
// var num2=3;

// var sum =function(){
//     var num2=3;
//     return function(){      
//         return num1 ; //num2 is not a closer
//     }
// }
// var result =sum();
// console.dir(result);



// (()=>{
// var num1= 3;
// var num2=3;

// var sum =function(){
//     var num2=3;
//     return function(){      //num1 is a closer because encloging scope
//         return num1 ;
//     }
// }
// var result =sum();
// console.dir(result);
// })();


// (function(){
// var num1=2;
// var num2=2;

// var sum= function(){
//     return num1+num2;
// }

// console.log(sum());   change variable referance
// console.dir(sum);
// num1=3;
// num2=3;

// console.log(sum());
// console.dir(sum);
// })();


//when using let 

// let num1= 3;
// let num2= 3;
// var sum = function(){    //let variable block scope 
//     return num1+ num2;   // then they place script 
// }

// console.dir(sum)


// when enclose 

// (()=>{
//     let num1= 3;
// let num2= 3;
// var sum = function(){   //let place closer
//     return num1+ num2;   
// }

// console.dir(sum)
// })();



//performance optimijation with closer

// function stopWatch(){
//     var startTime = new Date()
//     function getDelay(){
//         console.log (new Date()-startTime);
//     }
//     return getDelay;
// }

// var timer= stopWatch()
// //waiting preiod
// for(var i=0; i<10000000; i++){
//     var a = Math.random()*100000;
// }

// timer()
// console.dir(timer())  // closer saves the raferance
// timer=null;//grbag 
// timer()



//asyncronus function using closer
// var a;
// function async(){
//     a = 20;
//     var myfunc=()=>{
//         console.log(a)
//     }
//     setTimeout(myfunc,3000)
//     // console.dir(myfunc)
// }

// async()
// a=50


//Apicall in closer
// function apiFunction(url){
//     fetch(url).then((res)=>{
//         console.dir(res);
//     })
// }
// apiFunction('https://dummyjson.com/products/1')



//  closer in loop

// for (let i=0;i<3;i++){
//     setTimeout(()=>{
//         console.log(i) //when we use let result 1,2,3
//     },3000)            //after use var 3,3,3
// }





// refarence change that cause orginal result 3
// for (let i=0;i<3;i++){
//     var func=()=>{
//         console.log(i) 
//     }
//     console.log(i)
//     console.dir(func)
//     setTimeout( func ,3000) 
// }

