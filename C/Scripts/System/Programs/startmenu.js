let state = false;
let title = 'startmenu'
let pid = '00001'

function startmenuexe(button){
    if(state == false){


    new menu(title,pid,'200',undefined,button,undefined,`
        <div class="minmenu">
            <div class="title">
                <h1>WEB<span>95</span></h1>
            </div>
            <div style="display:flex; flex-direction:column; width:100%;">
                <button class="button_noborder" onmouseenter=""> <img src="./Styles/startmenu/programfolder.ico"> <p>Programs</p> <img class=arrow src=./Styles/icons/System/Arrow.ico> </button>
                <button class="button_noborder" onmouseenter=""> <img src="./Styles/startmenu/documentsfolder.ico"> <p>Documents</p> <img class=arrow src=./Styles/icons/System/Arrow.ico> </button>
                <button class="button_noborder" onmouseenter=""> <img src="./Styles/startmenu/settings.ico"> <p>Settings</p> <img class=arrow src=./Styles/icons/System/Arrow.ico> </button>
                <button class="button_noborder" onmouseenter=""> <img src="./Styles/startmenu/searchsheet.ico"> <p>Search</p> <img class="arrow" src=./Styles/icons/System/Arrow.ico> </button>
                <button class="button_noborder" onclick="CloseMenu('${title}','${pid}'); WebhelpEXE()"> <img src=./Styles/startmenu/helpbook.ico> <p>Help</p></button>
                <button class="button_noborder" onclick="CloseMenu('${title}','${pid}'); runexe()"> <img src=./Styles/startmenu/programwait.ico> <p>Run...</p></button>
                <hr>
                <button class="button_noborder" onmouseenter="" style=bottom:0;> <img src=./Styles/startmenu/turnoffcomputer.ico> <p class="disabled">ShutDown...</p></button>
            </div>
        </div>
        `)
    state = true;
    }else{
        CloseMenu(title,pid)
    }
}
function CloseMenu(title,pid){
        state = false
        CloseWindow(title,pid)
}