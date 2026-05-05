//// THIS IS THE NEW CREATION WINDOW

//  VARIABLES

let currentwindowpid = sessionStorage.setItem("currentpid", "0")
let currentwindowtitle = sessionStorage.setItem("currenttitle", "0")

let startX, startY;
let activeMoveHandler = null;



class explorer{
    constructor(title = "Hello World" ,pid = "00001" ,description = "This is a process without description", width = "450", height = "300", image = "./Styles/windowsicons/windows.png", maximizable = true, minimizable = true, closable=true, ontop = false, isdialog = false, movable = true, buttonontaskbar = true, content = "Hello World! this is text here!"){
        this.title = title
        this.pid = pid
        this.description = description
        this.width = width
        this.height = height
        this.image = image
        // OPTIONS FOR THE TOPBAR
        this.maximizable = maximizable
        this.minimizable = minimizable
        this.closable = closable

        this.ontop = ontop
        this.movable = movable
        this.buttonontaskbar = buttonontaskbar

        this.content = `
        <div class="WTop-Bar" pid="${this.pid}" title="${this.title}"> 
            <div> <img src="${this.image}" class="icon" id="${pid}">
            <p id="${this.pid}">${this.title}</p> </div> 
            <div>
                ${new topbar(this.title,this.pid,this.image, this.minimizable,this.maximizable,this.closable,this.isdialog).renderbuttons()}
            </div>  
        </div>
        ${content}`;
    }

    BuildWindow(){
        // CREATES THE MAIN WINDOW AND LOCATES THE POSITION
        const windows = document.createElement("div");
        const windowlocation = document.getElementById("Desktop");

        // ADDS ALL THE VARIABLES NEEDED INTO THE WINDOW 
        windows.classList.add("Window");
        windows.setAttribute('pid',this.pid);
        windows.setAttribute('title', this.title);
        windows.style.width = this.width + "px";
        windows.style.height = this.height + "px";
        windows.style.left = ((window.innerWidth - this.width)  / 2 + "px");
        windows.style.top = ((window.innerHeight - this.height)  / 2 + "px");
        windows.style.zIndex = 1;
        windows.innerHTML = this.content

        // ADDS THE WINDOW TO YOUR SCREEN :D
        windowlocation.insertAdjacentElement("afterbegin", windows);
        windows.addEventListener("mousedown", (e) => explorerclickManager(e, this.title,this.pid))
        // SUPER COOL CONSOLE LOG FOR THE DEBUGS :O
        console.log(`New Window created: TITLE: "${this.title}" PID: ${this.pid}`)
        
        // CREATE THE BUTTON ON THE TASKBAR
        if(this.buttonontaskbar){
        BuildTaskbarButton(this.pid, this.title, this.image);
        }

        // SELECT THE WINDOW
        document.querySelectorAll('.WTop-Bar').forEach(bar =>{
        bar.style.background = '';
        bar.style.color = '';
        })
        const TopBars = document.querySelectorAll(`.WTop-Bar[title="${this.title}"][pid="${this.pid}"]`);
        TopBars.forEach(bar => {
            bar.style.background = 'var(--selection-color)';
            bar.style.color = 'white';
        })
    }
    BuildWindow_Error(image, error){
        // CREATES THE MAIN WINDOW AND LOCATES THE POSITION
        const windows = document.createElement("div");
        const windowlocation = document.getElementById("Desktop");

        // ADDS ALL THE VARIABLES NEEDED INTO THE WINDOW 
        windows.classList.add("Window");
        windows.setAttribute('pid',this.pid);
        windows.setAttribute('title', this.title);
        windows.style.width = this.width + "px";
        windows.style.height = "auto";
        windows.style.left = ((window.innerWidth - this.width)  / 2 + "px");
        windows.style.top = ((window.innerHeight - this.height)  / 2 + "px");
        windows.style.zIndex = 1;
        windows.innerHTML = this.content

        // ADDS THE WINDOW TO YOUR SCREEN :D
        windowlocation.insertAdjacentElement("afterbegin", windows);
        windows.addEventListener("mousedown", (e) => explorerclickManager(e, this.title,this.pid))
        // SUPER COOL CONSOLE LOG FOR THE DEBUGS :O
        console.log(`New Window created: TITLE: "${this.title}" PID: ${this.pid}`)
        
        // CREATE THE BUTTON ON THE TASKBAR
        if(this.buttonontaskbar){
        BuildTaskbarButton(this.pid, this.title, false);
        }
    }
    CloseWindow(title ,pid){
        // LOCATES ALL THE ELEMENTS WITH THIS COMMON TAGS AND VANISHED THEM FOREVER :D
        const elementsToRemove = document.querySelectorAll(`[title="${title}"][pid="${pid}"]`);

        elementsToRemove.forEach(el => el.remove());
    }
}
class topbar{
    constructor(title = "Hello World",pid = "00001",icon = "./Styles/windowsicons/windows.png",minimizable = true,maximizable = true,closable = true,isdialog = false,) {

    this.title = title;
    this.pid = pid;
    this.icon = icon;
    this.minimizable = minimizable;
    this.maximizable = maximizable;
    this.closable = closable;
    this.isdialog = isdialog;

    }

    renderbuttons(){
        const showminmaxgroup = this.minimizable || this.maximizable;

        return `
            ${this.isdialog ? `<button pid="${this.pid}" title="${this.title}" onclick=""> <img src="./Styles/icons/help.svg" alt="h"> </button>` : ''}
            
            ${showminmaxgroup ? `
                <button pid="${this.pid}" title="${this.title}" onclick="explorerminimize('${this.title}','${this.pid}')" ${!this.minimizable ? 'disabled' : ''}> 
                    <img src="./Styles/icons/minimize.svg" alt="0"> 
                </button> 
                <button pid="${this.pid}" title="${this.title}" onclick="explorermaximize('${this.title}','${this.pid}')" ${!this.maximizable ? 'disabled' : ''}> 
                    <img src="./Styles/icons/maximize.svg" alt="1"> 
                </button>        
            ` : ''}

            ${this.closable !== undefined ? `
                <button onclick="new explorer().CloseWindow('${this.title}','${this.pid}');" ${!this.closable ? 'disabled' : ''}> 
                    <img src="./Styles/icons/close.svg" alt="r"> 
                </button>
            ` : ''}
        `;
    }
}
function BuildTaskbarButton(pid, title, image){
    // CREATES THE TASKBAR BUTTON ELEMENT AND LOCATES THE POSITION WHERE THE APP BELONGS
    const taskbarbutton = document.createElement("button");
    const taskbarbuttonlocation = document.getElementById("Apps");

    // ADDS ALL THE VARIABLES NEEDED INTO THE TASKBAR BUTTON;
    taskbarbutton.classList.add("taskbar-button");
    taskbarbutton.setAttribute('pid',pid);
    taskbarbutton.setAttribute('title',title);
    taskbarbutton.setAttribute('onclick',`explorerdeminimize('${title}','${pid}')`);

    if(!image){
        taskbarbutton.innerHTML = `<p>${title}</p>`
    }else if(image){
        taskbarbutton.innerHTML = `<img src="${image}"> <p>${title}</p>`
    }
    
    // ADDS THE BUTTON TO YOUR SCREEN
    taskbarbuttonlocation.insertAdjacentElement('beforeend', taskbarbutton);
}
function CloseWindow(title, pid){
    // LOCATES ALL THE ELEMENTS WITH THIS COMMON TAGS AND VANISHED THEM FOREVER :D
    const elementsToRemove = document.querySelectorAll(`[title="${title}"][pid="${pid}"]`);

    elementsToRemove.forEach(el => el.remove());
}
function explorerclickManager(event, title, pid) {
    const TopBars = document.querySelectorAll(`.WTop-Bar[title="${title}"][pid="${pid}"]`);
    const CurrentWindow = document.querySelector(`[title="${title}"][pid="${pid}"]`);

    document.querySelectorAll('.WTop-Bar').forEach(bar =>{
        bar.style.background = '';
        bar.style.color = '';
    })

    TopBars.forEach(bar => {
        bar.style.background = 'var(--selection-color)';
        bar.style.color = 'white';
    })

    startX = event.clientX - CurrentWindow.offsetLeft;
    startY = event.clientY - CurrentWindow.offsetTop;

    activeMoveHandler = (e) => {
        let newX = e.clientX - startX;
        let newY = e.clientY - startY;
        CurrentWindow.style.top = newY + 'px';
        CurrentWindow.style.left = newX + 'px';
    };

    document.addEventListener('mousemove', activeMoveHandler);
    
    document.addEventListener('mouseup', function _up() {
        document.removeEventListener('mousemove', activeMoveHandler);
        document.removeEventListener('mouseup', _up);

    }, { once: true });
}

function explorerminimize(title, pid){
    const CurrentWindow = document.querySelector(`[title="${title}"][pid="${pid}"]`);

    CurrentWindow.style.visibility = 'hidden';
    CurrentWindow.style.display = 'none';
}
function explorerdeminimize(title, pid){
    const CurrentWindow = document.querySelector(`[title="${title}"][pid="${pid}"]`);

    CurrentWindow.style.visibility = '';
    CurrentWindow.style.display = '';
}

let oldx = 0;
let oldy = 0;
let oldposx = 0;
let oldposy = 0;

function explorermaximize(title, pid){
    const CurrentWindow = document.querySelector(`[title="${title}"][pid="${pid}"]`);
    const currentButton = document.querySelectorAll(`button[title="${title}"][pid="${pid}"]`)[1]
    const currentImage = currentButton.querySelector('img');

    oldx = CurrentWindow.style.width;
    oldy = CurrentWindow.style.height;
    oldposx = CurrentWindow.style.left;
    oldposy = CurrentWindow.style.top;

    CurrentWindow.style.width = window.innerWidth + 'px';
    CurrentWindow.style.height = (window.innerHeight - 36) + 'px';
    CurrentWindow.style.top = '0px';
    CurrentWindow.style.left = '0px'

    currentButton.setAttribute("onclick", `explorerrestore('${title}','${pid}')`)
    currentImage.src = './Styles/icons/restore.svg'
}
function explorerrestore(title, pid){
    const CurrentWindow = document.querySelector(`[title="${title}"][pid="${pid}"]`);
    const currentButton = document.querySelectorAll('button'+`[title="${title}"][pid="${pid}"]`)[1]
    const currentImage = currentButton.querySelector('img');

    CurrentWindow.style.width = oldx
    CurrentWindow.style.height = oldy
    CurrentWindow.style.top = oldposy
    CurrentWindow.style.left = oldposx

    currentButton.setAttribute("onclick", `explorermaximize('${title}','${pid}')`);
    currentImage.src = './Styles/icons/maximize.svg'
}