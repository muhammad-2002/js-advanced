//example without higerorder function


// let numbers = [1,2,3,45,6,6];

// let result =[];

// for(let i = 0; i < numbers.length; i++){
//     result.push(numbers[i]*2);
// }

// console.log(result);



//example with higerorder function

// let numbers = [1,2,3,45,6,6];

// let result = numbers.map((number)=> number*2);
// console.log(result);



//example 2 without higerorder function

// let Players = [
//     shakib={
//         name:"Shakib",
//         avg:38.76
//     },
//     Tamin ={
//         name:"Tamim",
//         avg:35.55
//     },
//     Musfiqur = {
//         name:"Musfiqur Rahim",
//         avg:36.22
//     },
//     Mahamudullah = {
//         name:"Mahamudullah",
//         avg:37.44

//     }
// ]



// let requrdAvgPlayer =[];
// for(let i=0 ; i< Players.length; i++){
//     if(Players[i].avg>=37){
//         requrdAvgPlayer.push(Players[i]);

//     }
// }

// console.log(requrdAvgPlayer);


///example 2 with higerorder function

// let requrdAvgPlayer =Players.filter((player)=>player.avg>=37);
// console.log(requrdAvgPlayer);






/// array.map bulit in by me    

// const language =["HTML","CSS","JAVASCRIPT","PYTHON","C"]

// function mapMasum(arr,fn){
//     let newarray =[];
//     for(let i=0; i< arr.length; i++){
//         newarray.push(fn(arr[i]))
//     }
//     return newarray;
// }

// let Myarray = mapMasum(language, function(languageitem){
//     return languageitem.length;
// });
// console.log(Myarray);