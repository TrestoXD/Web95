//Variables
let mainmenustate = false;

function mainmenuButton(){
    if(mainmenustate == false){
        mainmenuExe();
        mainmenustate = true;
        console.log("Button is now true?: " + mainmenustate);
    }else{
        mainmenuRemove();
        console.log("Button is now false?: " + mainmenustate);
    }
}
function mainmenuRemove(){
    document.getElementById("minmenu").remove();
    try {
        document.getElementById("secmenu").remove();
    } catch (error) {
        
    }
    mainmenustate = false;
}

function mainmenuExe(){
    console.log("opening menu...")
    MainmenuExe('0px','34px', true,false,`
        <div style="display:flex">
            <div class="title">
                <h1>WEB<span>95</span><h1>
            </div>
            <div style="display:flex; flex-direction:column; width:100%;">
                <button class="button_noborder" onmouseenter="MainmenusecExe('200px','286px',true,true, '${Programs_Menu}')"> <img src="./Styles/AppIcons/directoryprogramgroup.ico"> <p>Programs</p> <img class=arrow src=./Styles/icons/System/Arrow.ico> </button>
                <button class="button_noborder" onmouseenter="MainmenusecExe('200px','272px',true,true, '${Documentos_Menu}')"> <img src="./Styles/AppIcons/documentsnormal.ico"> <p>Documents</p> <img class=arrow src=./Styles/icons/System/Arrow.ico> </button>
                <button class="button_noborder" onmouseenter="MainmenusecExe('200px','206px',true,true, '${Settings_Menu}')"> <img src="./Styles/AppIcons/settingsgear.ico" style=scale:1.5;> <p>Settings</p> <img class=arrow src=./Styles/icons/System/Arrow.ico> </button>
                <button class="button_noborder" onmouseenter="MainmenusecExe('200px','166px',true,true, '${Find_Menu}')"> <img src="./Styles/AppIcons/searchfile.ico"> <p>Search</p> <img class="arrow" src=./Styles/icons/System/Arrow.ico> </button>
                <button class="button_noborder" onmouseenter="Delete_MainmenusecExe()" onclick="WebhelpEXE()"> <img src=./Styles/AppIcons/helpbookbig.ico> <p>Help</p></button>
                <button class="button_noborder" onmouseenter="Delete_MainmenusecExe()" onclick="runexe()"> <img src=./Styles/AppIcons/applicationhourglass.ico> <p>Execute</p></button>
                <hr>
                <button class="button_noborder" onmouseenter="Delete_MainmenusecExe()" style=bottom:0;> <img src=./Styles/AppIcons/shutdownnormal.ico style='height: 45px; margin:-6px'> <p class="disabled">ShutDown...</p></button>
            </div>
        </div>
        `);
}

let Programs_Menu = `<div> <button class=button_noborder onclick=cmdexe()> <img src=./Styles/AppIcons/msdos1.ico> MS-DOS Prompt</button> <button class=button_noborderdisabled><img src=./Styles/icons/System/WindowsExplorer.ico>Windows Explorer</button> </div>`
let Documentos_Menu = `<div> <button class=button_noborder onclick=ReadmeEXE()> <img src=./Styles/AppIcons/doc_Notepad.ico> Readme.txt</button> </div>`
let Settings_Menu = `<div><button class=button_noborder onclick=ControlpanelEXE()>Control panel</button> <button class=button_noborderdisabled>Taskbar & Start Menu...</button> </div>`
let Find_Menu = `<div> <button class=button_noborderdisabled>Files or Folders...</button> <button class=button_noborderdisabled>On The XD Network...</button> </div>`