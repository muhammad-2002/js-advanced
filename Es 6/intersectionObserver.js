const squers= document.querySelectorAll('div');
const observer = new IntersectionObserver((squers)=>{
    squers.forEach((squer)=>{
        if(squer.isIntersecting){
            squer.target.classList.add('visibal')

        }else{
            squer.target.classList.remove('visibal')
        }
    })
})

squers.forEach((squer)=>observer.observe(squer))