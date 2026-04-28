function ControlpanelEXE(){
    WindowExe('Control Panel', 450, 400, null, true, true, `
    
    <div class="explorer_topbar">
            <button class="disabled"><span class="underline">F</span>ile</button>
            <button class="disabled"><span class="underline">E</span>dit</button>
            <button class="disabled"><span class="underline">V</span>iew</button>
            <button class="disabled"><span class="underline">H</span>elp</button>
    </div>
    <div class="explorer_files" style="height: calc(100% - 58px);">
        <button ondblclick=displayEXE()> <img alt="Display" src="./Styles/appicons/display.ico"> <p>Display</p></button>
        <button ondblclick=> <img alt="Sound" src="./Styles/appicons/systemsound.ico"> <p>Sound</p></button>
        <button ondblclick=> <img alt="Mouse" src="./Styles/appicons/mouse.ico"> <p>Mouse</p></button>
        <button ondblclick=> <img alt="System" src="./Styles/appicons/system.ico"> <p>System</p></button>
    </div>
    `)
}