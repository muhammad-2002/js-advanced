const display= document.getElementById('display');
async function fatchcall(){
    const res = await fetch("http://192.168.0.109:5501/fach%20Api/text.txt")
    const data = await res.text();
    display.innerHTML =data
}