let debugmode = false;
const time = 3;

document.body.addEventListener('keypress', BootPress);
const sel = document.getElementById("select")

sel.addEventListener('change',function(e){
    let value = sel.options[sel.options.selectedIndex].value;
    console.log("The value is: "+ value)    
});


if(debugmode == false){
    console.log("Initiating Countdown...");
    setTimeout(StartBoot, (3 * 1000));
}

function ChangeTimer(ti){
    document.getElementById("countdown-text").innerText = ti;   
    console.log("changed to " + ti)
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function StartBoot(){
    console.log("BootScreen initiated")
    window.open("./C/Startmenu.html", "_self")
}

function BootPress(e){
    if(e.keycode === 13 || e.key === 'Enter'){
        let value = sel.options[sel.options.selectedIndex].value;
        if(value == 1){
            console.log("BootScreen initiated")
            window.open("./C/Startmenu.html", "_self")            
        }else{
            alert("This OS is not prepared...")
        }
    }
}