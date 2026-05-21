function controlpanelexe(){
    new explorer("Control panel", undefined,"The Control panel is the centralized system management interface that allows you to view, configure, and customize OS settings, hardware and software","450","250",'./Styles/windowsicons/msdos.ico',false,true,true,true,false,false,true,true,`
        <div class="explorer_topbar">
            <button class="disabled"><span class="underline">F</span>ile</button>
            <button class="disabled"><span class="underline">E</span>dit</button>
            <button class="disabled"><span class="underline">V</span>iew</button>
            <button class="disabled"><span class="underline">H</span>elp</button>
        </div>
        <div class="explorer_files" style="height: calc(100% - 58px);">
            <button ondblclick=displayexe()> <img alt="Display" src="./Styles/appicons/display.ico"> <p>Display</p></button>
            <button ondblclick=> <img alt="Sound" src="./Styles/appicons/systemsound.ico"> <p>Sound</p></button>
            <button ondblclick=> <img alt="Mouse" src="./Styles/appicons/mouse.ico"> <p>Mouse</p></button>
            <button ondblclick=> <img alt="System" src="./Styles/appicons/system.ico"> <p>System</p></button>
        </div>
        
        `).BuildWindow();
}

