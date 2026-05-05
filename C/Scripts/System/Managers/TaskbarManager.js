// TASKBAR VARIABLES
const taskbar_heigth = "24px";

let volume_widget = true;
let time_widget = true;
let socialmedia_widget = true;

///// TASKBAR /////

//// Taskbar Builder

/// Taskbar Variables:
//
// Height
// Start button
// Atached Buttons Area
// Task Buttons Area
// Widgets Area
// 
class taskbar{
    constructor(heigth = "24px", startbutton = true, atachesdarea = false, tasksarea = true, widgetsarea = true){
        this.heigth = heigth;
        this.startbutton = startbutton;
        this.atachesdarea = atachesdarea;
        this.tasksarea = tasksarea;
        this.widgetsarea = widgetsarea;
    }

    rendertaskbar(){
        const taskbar = document.createElement("footer")

        taskbar.id = "taskbar"
        taskbar.classList = "Taskbar"

        taskbar.innerHTML = `
            ${ this.startbutton ? `<div ="taskbarstartbutton">
                <button id="StartButton" class="StartButton" onclick="mainmenuButton()"><img src="./Styles/icons/System/windowsstartlogo.png"><p>Start</p></button>
                <hr>
            </div>` : ''}

            ${this.atachesdarea ? `
            <div id="atachesdarea">
                <hr>
            </div>` : ''}

            ${this.tasksarea ? `
            <div id="Apps">
            </div>` : ''}
            
            <div id="widgetsarea">
            </div>
        `;

        document.body.insertAdjacentElement("afterend", taskbar)
    }
}

new taskbar().rendertaskbar();

// Taskbar Volume

if(volume_widget){
    const volumediv = document.createElement("button");
    const volumepos = document.getElementById("Widgets");

    volumediv.innerHTML = `
        <button id="Volume_Widget" class="button_noborder" onclick="SoundmenuEXE()"> <img src="./Styles/icons/System/sound.png"> </button>
    `
    volumepos.innerHTML += volumediv.innerHTML
}


// Taskbar Time 


if(time_widget){
    const timediv = document.createElement("button");
    const timepos = document.getElementById("Widgets");

    timediv.innerHTML = `
        <button id="Time_Widget" class="button_noborder"> <p id="widget-time" style="user-select: none;">00:00</p> </button>
    `
    timepos.innerHTML += timediv.innerHTML
}


// Taskbar Socialmedia


if(socialmedia_widget){
    const socialdiv = document.createElement("div");
    const socialpos = document.getElementById("Widgets_hr");

    socialdiv.classList = "Social";
    socialdiv.innerHTML = `
        <hr id="Widgets_hr">
        <button class="button_noborder" onclick="window.open('https://discord.gg/xn3VcQkMWh')"><img src="./Styles/AppIcons/discord.png" alt="discord"></button>
        <button class="button_noborder" onclick="window.open('https://github.com/TrestoXD')"><img src="./Styles/AppIcons/github.png" alt="github"></button>
        <button class="button_noborder" onclick="window.open('https://www.instagram.com/trestoxd/')"><img src="./Styles/AppIcons/camera-0.png" alt="Instagram"></button>
        <button class="button_noborder" onclick="window.open('https://www.youtube.com/@Tresto_XD')"><img src="./Styles/AppIcons/youtube.png" alt="Youtube"></button>
        <button class="button_noborder" onclick="window.open('https://www.tiktok.com/@tresto_xd?_r=1&_t=ZN-95Py80ekmso')"><img src="./Styles/AppIcons/tiktok.png" alt="Tiktok"></button>
    `
    socialpos.parentNode.insertBefore(socialdiv, socialpos)
}