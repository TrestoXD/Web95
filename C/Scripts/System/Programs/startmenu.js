function startmenuexe(button){
    new menu('startmenu',undefined,'200',undefined,button,`
        <div class="minmenu">
            <div class="title">
                <h1>WEB<span>95</span></h1>
            </div>
            <div style="display:flex; flex-direction:column; width:100%;">
                <button class="button_noborder" onmouseenter="MainmenusecExe('200px','286px',true,true, '${Programs_Menu}')"> <img src="./Styles/startmenu/programfolder.ico"> <p>Programs</p> <img class=arrow src=./Styles/icons/System/Arrow.ico> </button>
                <button class="button_noborder" onmouseenter="MainmenusecExe('200px','272px',true,true, '${Documentos_Menu}')"> <img src="./Styles/startmenu/documentsfolder.ico"> <p>Documents</p> <img class=arrow src=./Styles/icons/System/Arrow.ico> </button>
                <button class="button_noborder" onmouseenter="MainmenusecExe('200px','206px',true,true, '${Settings_Menu}')"> <img src="./Styles/startmenu/settings.ico"> <p>Settings</p> <img class=arrow src=./Styles/icons/System/Arrow.ico> </button>
                <button class="button_noborder" onmouseenter="MainmenusecExe('200px','166px',true,true, '${Find_Menu}')"> <img src="./Styles/startmenu/searchsheet.ico"> <p>Search</p> <img class="arrow" src=./Styles/icons/System/Arrow.ico> </button>
                <button class="button_noborder" onmouseenter="Delete_MainmenusecExe()" onclick="WebhelpEXE()"> <img src=./Styles/startmenu/helpbook.ico> <p>Help</p></button>
                <button class="button_noborder" onmouseenter="Delete_MainmenusecExe()" onclick="runexe()"> <img src=./Styles/startmenu/programwait.ico> <p>Run...</p></button>
                <hr>
                <button class="button_noborder" onmouseenter="Delete_MainmenusecExe()" style=bottom:0;> <img src=./Styles/startmenu/turnoffcomputer.ico> <p class="disabled">ShutDown...</p></button>
            </div>
        </div>
        `)
}