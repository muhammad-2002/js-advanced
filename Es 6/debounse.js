const button = document.querySelector('#btn');

function debounce(fn,delay){
    let controltime;
    return function(){
        if(controltime){
            clearTimeout(controltime);
        }
        controltime = setTimeout(()=>{
            fn();
        },delay)
    }

}
button.addEventListener('click',debounce(function(){
    console.log("clicked")
},500))