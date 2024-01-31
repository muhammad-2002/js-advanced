//////implicide binding////////


// var shakib = {
//     name : "Shakib",
//     age: 37,
//     pringPlayer:function(){
//         console.log(`${this.name} is Playing`)  
//     }
// }
// shakib.pringPlayer();







// var printPlayernamefunction = function(obj){
//     obj.prinyPlayername = function(){
//         console.log(this.name)
//     }

// }

// var Shakib ={
//     name:"Masum",
//     Age:34;
// }
// var Tamim ={
//     name:"Tamim",
//     Age:34;
// }
// printPlayernamefunction(Shakib);
// printPlayernamefunction(Tamim);
// Shakib.prinyPlayername()
// Tamim.prinyPlayername()


// var person = function(){
//     return{
//         name:"Muahmmad Masum Billah",
//         age: 22,

//         printname : function(){
//             console.log(`${this.name}`)
//         },
//         father:{
//             name:"MR.xxx",
//             printname:function(){
//                 console.log(this.name)
//             }

//         }
//     }
// }
// var shakib = person("Shakib",21);
// shakib.father.printname()




/////// ///Explicide binding


// var printName =function(){
//     console.log(`${this.name} is ${v1} ${v2}${v3}`)
// }

// var person = {
//     name:"Masum Billah",
//     Age:78
// }

// var v1 = "honest";
// var v2 = "Player";
// var v3 = "in the World";
// var v = [v1,v2,v3]
// var bind = printName.bind(person,v);
// bind()



//// new bainding...


// var printPlayerName =function(name,roll){
//     this.name =name;
//     this.roll = roll;
//     console.log(`${this.name} is ${this.roll}`)
// }
// var shakib = new printPlayerName('Masum',123);


/// window baindig

// var printPlayerName = function(){
//     console.log(Window ===this)
//     console.log(this.name)
// }
// var person = {
//     name : "Shakib"
// }

// printPlayerName();
