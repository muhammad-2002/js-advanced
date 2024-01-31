onmessage = function(message){
    console.log("Worker start Work");
    let total=0
    for( let i = 0 ; i<10000000000; i++){
        total+=i;
    }
    self.postMessage(total)

    console.log("worker end work")
}