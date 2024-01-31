async function serverReq(){
    const myObj = await fetch('demo.txt');
    const datatext = await myObj.text();
    console.log(JSON.parse(datatext));
}
serverReq()