///bydefult bubling otherwise capture applyed

const div = document.querySelector('.friststage');
const form = document.querySelector('#form');
const button = document.querySelector('#click');


div.addEventListener('click',lisener)
form.addEventListener('click',lisener,{
  capture: true
})
button.addEventListener('click',lisener)


function lisener(event){
  console.log(this)

}


//Event Daligation

const list = document.querySelector(".list");
list.addEventListener('click',(e)=>{
  if (e.target.matches('li')){
    if(e.target.innerText === "PhP"){
      return e.target.style.backgroundColor = "pink";

    }
    if(e.target.innerText === "Java"){
      return e.target.style.backgroundColor = "red";

    }
    else{
      return e.target.style.backgroundColor = "yellow";
    }
  }
});

const btn = document.querySelector('.btn');
function btnclick(){
  const li = document.createElement('li');
  li.innerText = "jQurrey"
  list.appendChild(li);
  
}