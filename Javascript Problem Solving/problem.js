//1.লুডু খেলার জন্য ১ থেকে ৬ পর্যন্ত Random Number Genarate করা।
function getrandomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;

}
let x= getrandomNumber(1,6);
console.log(x);


//2.শ্রেণী কক্ষে সকল বন্ধুদের নাম Alphabaticly সাজানো।
const frints=["Masum","Munim","Akram","Rabbi","Akram"];
console.log(frints.sort());

//3.শ্রেণী কক্ষে সকল বন্ধুদের Roll ক্রম অনুযায়ী সাজানো।
const rollNumber=[1,2,3,9,8,7,6,5,4,10,12,11,13,15,14];
let sortRoll=rollNumber.sort(function(a,b){
    return a-b;
});
console.log(sortRoll);

// 4.কোন সাল Leyper কিনা তা বের করা।
function Leyper(year){
    if ((year % 400 === 0)||(year%4===0 && year%100!==0))
    {return `${year }"Is Leyper"`;}
    else{ return `${year }"Is not Leyper"`;}
}
console.log(Leyper(2000));


//5.কোন Sentence এ কতগুল vowel আছে তা নির্নয়।
const vowel=["a","e","i","o","u","A","E","I","O","U"];
function conuntVowel(sentence){
    let count=0;
    const letter=Array.from(sentence);
    letter.forEach(function(value){
        if(vowel.includes(value)){
            count++;       
        }
    })
    return count;

}
console.log(conuntVowel("I am Muhammad Masum Billah"));



const myArray=[1,2,3,6,6,7,8,6,8,9,9];
const Dublicates= myArray.filter(
    function(value, index, array){
    return array.indexOf(value)!== index
});
console.log(Dublicates);

//6.কোন Array থেকে Unique নাম্বর গুলকে বের করা।

const Arrays=[1,2,3,6,6,7,8,6,8,9,9];
const Unique= Arrays.filter(
    function(value, index, array){
    return array.indexOf(value) === index;
});
console.log(Unique);

//7.নিচের Sentence টি তে Masum শব্দ কয়টা আছে এবং প্রথমে কোথায় Masum শব্দটি আছে ?
const sentence= "Hellow Program my name is Muhammad Masum Billah i am a Student , now Masum Is a Web Devloper My Future is the best Masum  create a new channel MB Unique Tech Masum  Future Made he ";

const matchs=sentence.match(/Masum/ig);
const result= matchs ? matchs.length : 0 ;
console.log(result);
const fastmatch= sentence.search(/Masum/i);
const result1= fastmatch ? fastmatch : " Not Found ";
console.log(result1);


//8. lineersearch Function() টি implement করে দেখাও ।
// input=['a','b','c','d','e'],'c'
//output= 2 or not found

const myArrays=['a','b','c','d'];

function lineersearch(array,value){
    const lenth =array.length;
    for( i=0; i < lenth; i++){
        if(array[i]===value){
            return i;
        }
    }
    return "not found"
}
console.log(lineersearch(myArrays, 'c'));


//9. কোন Array থেকে কিভাবে সবথেকে বড় word খুজে বের করবো এবং তার index কীভাবে জানবো ? 

const names=["Muhammad Masum","Mahamudul Hassn Munim","Chowduri Jafor Ullah Sarafat"];
function longestWord(arr){
    let longestString="";
    for (x of arr){
        if( x.length > longestString.length){
            longestString = x;
        }  
    }
    return [longestString, arr.indexOf(longestString)]
}
console.log(longestWord(names));


//10.১-১০০ পর্যন্ত কোন সংখ্যাগুলো ৩,৫ এবঙ ৩ ও ৫ উভয় সংখ্যা দ্বারা বিভাজ্য ।
function fizbuzz(numbers){
    for( i= 1; i<=numbers; i++){
        if( i% 15 === 0){
            console.log(`${i} is fizbuzz`)
        } else if( i % 3 === 0){
            console.log(`${i} is fiz`)
        } else if( i% 5 === 0){
            console.log(`${i} is buzz`)
        }else{
            console.log(i)
        }
    }
}
fizbuzz(10);

//11.কোন array থেকে false value মুছে ফেলা।
const mixtedarray=["Sultan", undefined, "Hsaib",'', 34, NaN, false, "Muhammad"];
const filtered= mixtedarray.filter(function(vlue){
    if(vlue){
        return true
    }
    else{
        return false
    }
});
console.log(filtered);

// Enother Way.......

console.log(mixtedarray.filter(Boolean));




// 12.object থেকে falsey value Delete করা ।
const obj = {
    a: "answeer",
    b: NaN,
    c: "Mostofa",
    d: "Professor",
    e: undefined,
    f: ""
    };

const  truethyobj = function(obj){
    for(let i in obj){
        if(!obj[i]){
            delete obj[i]
        }
    }
    return obj;
}
console.log(truethyobj(obj));


