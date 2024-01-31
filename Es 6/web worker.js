const worker = new Worker("Worker.js")

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");


btn1.addEventListener("click",()=>{
    worker.postMessage("message")

});
worker.onmessage =function(message){
    console.log(message.data)
}

btn2.addEventListener('click',()=>{
    if(document.body.style.backgroundColor!=="red"){
        return document.body.style.backgroundColor="red";

    }
    else{
        return document.body.style.backgroundColor ="pink"
    }

})