let debugmode = false;
let timer = Math.random(4,5)
console.log(timer)

if(debugmode == false){
    console.log("Initiating Countdown...");
    setTimeout(StartOS, (timer) * 4000);
}

function StartOS(){
    console.log("OS initiated")
    window.open("./Desktop.html", "_self")
}