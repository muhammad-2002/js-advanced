function modifier(string,...values){
    let x=string.reduce((pre,curr)=>{
        return pre + curr +(values.length ? "Mr."+ values.shift() :"")

    },"") 
    return x
}
var player1 = "Shakib";
var player2 = "Musfiqur Rahim";

console.log(modifier`The Bangladasi Player ${player2} and contribute best performance but ${player1} is a lazy`)