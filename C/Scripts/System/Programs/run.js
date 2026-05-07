function runexe(){

new explorer("Run", undefined,"The run program is to run apps in a fast and easy way","450","165",false,false,false,true,true,true,true,true,
    `
    <div class="run">
        <div style="display:flex; ">
            <img style="height: 38px;" src="./Styles/AppIcons/applicationhourglass.ico">
            <p>Type the name of a program, folder, or document,and Web95 will try to open it for you.</p>
        </div>
        <div>
            <p>Open:</p>
            <input type="text" id="run-input">
        </div>
        <div>
            <button onclick="run_ok(this)" id="run_ok" class="disabled">Ok</button>
            <button onclick="LocateCloseWindow(this)">Cancel</button>
            <button>Browse...</button>
        </div>
    </div>
    `).BuildWindow();

    document.getElementById("run-input").focus();

    const input = document.getElementById("run-input");
    let button = document.getElementById("run_ok");

    input.addEventListener('input', () => {
        if(input.value.trim() === '') {
            button.classList.add("disabled")
            button.setAttribute("onclick", "")
        }else{
            button.classList.remove("disabled");
            button.setAttribute("onclick", "run_ok(this)")
        }
    })
    input.addEventListener("keypress", function(event){
        if(event.key === "Enter") {
            event.preventDefault();
            button.click();
        }
    })
}

function run_ok(button){
    const string = document.getElementById("run-input").value;

    const data = {};

    // ALL THE DATA FROM THE RUN
    data["cmd"] = { name: "cmd", dir:"cmdexe"};
    data["msinfo32"] = {name:"msinfo32"}

    if(data[string]){
        if(data[string].dir){
            window[data[string].dir]();
            LocateCloseWindow(button);
        }else{
            syserror("Web95 couldn't find the dir of the Program. Make sure that the dir is correctly writed and try again.")
        }
    }else{
        syserror("Web95 couldn't find the program. Make sure that the name is well writed and try again.")
    }
}
