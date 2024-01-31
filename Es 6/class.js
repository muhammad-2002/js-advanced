// class person{
//     constructor(name,age){
//       this.name= name;
//       this.age =age;

//     }
//     eat(){
//         console.log( `${this.name} eating`)
//     }
// }
// class crickter extends person{
//     constructor(name,age,type,country){
//     super();
//       this.name= name;
//       this.age =age;
//       this.type = type;
//       this.country = country;

//     }
//     play(){
//         console.log(`${this.name} is Playing Well`)
//     }
   
// }
// const shakib = new person("shakib",35,"crickter","bangladasi")

// console.log(shakib);


//// getter and setter 


// class person{
//     constructor(name,age){
//       this.name= name;
//       this.age =age;

//     }
//     eat(){
//         console.log( `${this.name} eating`)
//     }
//     get setName(){
//         return this.name;
//     }
//     set setName(name){
//         return this.name = name;
//     }
// }

// const shakib = new person("shakib",35)

// console.log(shakib.setName);



// class person{
//     constructor(name,age){
//       this.name= name;
//       this.age =age;

//     }
//    static isEqual(a,b){
//     return a === b;
//    }
// }


// const shakib = new person("shakib",36);
// const Tamim = new person("shakib",36);

// console.log(person.isEqual(shakib,Tamim));



// class person{
//     constructor(name,age){
//       this.name= name;
//       this.age =age;

//     }
//     play(){
//         console.log(`${this.name} is playing `)
//     }
// }
// class crickter extends person {
//     constructor(name,age,type,country){
//     super(name,age);
//       this.name= name;
//       this.age =age;
//       this.type = type;
//       this.country = country;

//     }
//     play(){
//         super.play()
//         console.log(`${this.name} is playing well `)
//     }
// }
// const shakib = new crickter("shakib",35,"crickter","bangladasi")
// shakib.play()