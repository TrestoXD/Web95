function ControlpanelEXE(){
    WindowExe('Control Panel', 400, 410, null, true, true, `
    
    <div class="explorer_topbar">
            <button class="disabled"><span class="underline">F</span>ile</button>
            <button class="disabled"><span class="underline">E</span>dit</button>
            <button class="disabled"><span class="underline">V</span>iew</button>
            <button class="disabled"><span class="underline">H</span>elp</button>
    </div>
    <div class="explorer_files">
        <button onclick=displayEXE()> <img alt="Navegate" src="./Styles/appicons/display.ico"> <p>Display</p></button>
    </div>
    `)
}