function runexe(){

new explorer("Run", undefined,"The run program is to run apps in a fast and easy way","400","155",false,false,false,true,true,false,true,true,
    `
    <div class="run">
        <div>
            <p>Type the name of a program, folder, or document,and Web95 will try to open it for you.</p>
        </div>
        <div>
            <p>Open:</p>
            <input type="text" id="run-input">
        </div>
        <div>
            <button onclick="run_ok(this)">Ok</button>
            <button onclick="LocateCloseWindow(this)">Cancel</button>
            <button>Browse...</button>
        </div>
    </div>
    `).BuildWindow();
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
