//first example
// console.log(a)
//get referance

//but use below rules

// console.log(b);        // get undifined
// var b = "hellow world" // when use let you get reference error


//second example
// var LANGUAGE = "java"
// var language = "Java script"

// function getLanguage(){
//     if(!language){
//         var language=LANGUAGE;//when i use let problem solve
//     }
//     return language
// }
// console.log(`I Expect small ${getLanguage()} `)

//third way

// myfunc();
// function myfunc(){
//     console.log("hello world") //return hellow world

// }

//again.........
    // myfunc();
    // function myfunc(){
    //  language = "javascript" //return javascript
    //  var language;
    //  console.log(language)
    // }

//when i write the code This way
// myfunc()
// const myfunc =()=>{             //referance Error
//     console.log("hellow world")
// }

