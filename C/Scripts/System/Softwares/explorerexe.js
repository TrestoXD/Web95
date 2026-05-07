//// THIS IS THE NEW CREATION WINDOW

//  VARIABLES

let currentwindowpid = sessionStorage.setItem("currentpid", "0")
let currentwindowtitle = sessionStorage.setItem("currenttitle", "0")

let startX, startY;
let activeMoveHandler = null;

let lastwindowtitle = null;
let lastwindowpid = '00001';



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
        this.isdialog = isdialog

        this.ontop = ontop
        this.movable = movable
        this.buttonontaskbar = buttonontaskbar

        let currentpid = parseInt(this.pid);
        while(document.querySelector(`[title="${this.title}"][pid="${this.pid}"]`)){
            currentpid++; 
            this.pid = currentpid.toString().padStart(5, '0');
        }

        this.content = `
        <div class="WTop-Bar" pid="${this.pid}" title="${this.title}"> 
            ${new topbar(this.title,this.pid,this.image, this.minimizable,this.maximizable,this.closable,this.isdialog).renderbuttons()}
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

        if(this.height == "auto"){
        windows.style.height = "auto";
        }else{
        windows.style.height = this.height + "px";
        }
        
        if(this.title === lastwindowtitle){
            const lastwindow = document.querySelector(`[title="${lastwindowtitle}"][pid="${lastwindowpid}"]`);

            if(parseInt(lastwindow.style.top) >= window.innerHeight){
                const lastleft = parseInt(lastwindow.style.left) || 0;

                windows.style.left = (innerWidth - lastleft + 40) + "px";
                windows.style.top = (20) + "px";
            }
            else if(lastwindow){
                const lastleft = parseInt(lastwindow.style.left) || 0;
                const lasttop = parseInt(lastwindow.style.top) || 0;
            
                windows.style.left = (lastleft + 20) + "px";
                windows.style.top = (lasttop + 20) + "px";
            }
        }else{
            if(this.height == "auto"){
                windows.style.top = ((window.innerHeight / 2 ) - 75 + "px");    
            }else{
                windows.style.top = ((window.innerHeight - this.height)  / 2 + "px"); 
            }
            windows.style.left = ((window.innerWidth - this.width)  / 2 + "px");
        }
        lastwindowpid = this.pid;
        lastwindowtitle = this.title;
        
        windows.innerHTML = this.content

        // ADDS THE WINDOW TO YOUR SCREEN :D
        windowlocation.insertAdjacentElement("beforeend", windows);
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
        document.querySelectorAll(`.Window`).forEach(wins =>
        {
            wins.style.zIndex = 1
        })
        const TopBars = document.querySelectorAll(`.WTop-Bar[title="${this.title}"][pid="${this.pid}"]`);
        TopBars.forEach(bar => {
            bar.style.background = 'var(--selection-color)';
            bar.style.color = 'white';
            windows.style.zIndex = 99999
        })
    }
}
class menu{
    constructor(title = "Hello menu", pid = "00001", width = "150", height = "300",button, content = 'Hello text'){
        // MENU VARIABLES
        this.title = title;
        this.pid = pid;

        this.width = width;
        this.height = height;
        this.button = button;
        if(this.button == null){
            console.log("button not specified!")
        }

        this.content = content
        
        let currentpid = parseInt(this.pid);
        while(document.querySelector(`[title="${this.title}"][pid="${this.pid}"]`)){
            currentpid++; 
            this.pid = currentpid.toString().padStart(5, '0');
        }
        // MENU BUILDER

        const menu = document.createElement("div");
        const menupos = button.getBoundingClientRect();
        const menulocation = document.getElementById("Desktop")

        menu.classList.add("Window");
        menu.setAttribute('pid',this.pid);
        menu.setAttribute('title', this.title);
        menu.style.width = this.width + "px";
        menu.style.height = this.height + "px";
        menu.style.top = (parseInt(menupos.top) - this.height) + "px";
        menu.style.left = parseInt(menupos.left) + "px";
        menu.style.zIndex = "100001"

        menu.innerHTML = this.content

        menulocation.insertAdjacentElement("beforeend", menu)
    }
}
class topbar{
    constructor(title = "Hello World",pid = "00001",image = "./Styles/windowsicons/windows.png",minimizable = true,maximizable = true,closable = true,isdialog = false) {

    this.title = title;
    this.pid = pid;
    this.image = image;
    this.minimizable = minimizable;
    this.maximizable = maximizable;
    this.closable = closable;
    this.isdialog = isdialog;

    }

    renderbuttons(){
        const showminmaxgroup = this.minimizable || this.maximizable;

        return `
            <div> 
                ${this.image ? `<img src="${this.image}" class="icon" id="${this.pid}">` : ''}
                <p id="${this.pid}">${this.title}</p> 
            </div> 

            <div>
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
            </div>
            ` : ''}
        `;
    }
}
function BuildTaskbarButton(pid, title, image){
    // CREATES THE TASKBAR BUTTON ELEMENT AND LOCATES THE POSITION WHERE THE APP BELONGS
    const taskbarbutton = document.createElement("button");
    const taskbarbuttonlocation = document.getElementById("tasksarea");

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
function LocateCloseWindow(button){
    const windowelement = button.closest('.Window');

    title = windowelement.getAttribute("title");
    pid = windowelement.getAttribute("pid");

    CloseWindow(title, pid)
}
function CloseWindow(title, pid){
    // LOCATES ALL THE ELEMENTS WITH THIS COMMON TAGS AND VANISHED THEM FOREVER :D
    const elementsToRemove = document.querySelectorAll(`[title="${title}"][pid="${pid}"]`);

    elementsToRemove.forEach(el => el.remove());  
    
    lastwindowpid = null
    lastwindowtitle = null
}

function explorerclickManager(event, title, pid) {
    const TopBars = document.querySelectorAll(`.WTop-Bar[title="${title}"][pid="${pid}"]`);
    const CurrentWindow = document.querySelector(`[title="${title}"][pid="${pid}"]`);

    document.querySelectorAll('.WTop-Bar').forEach(bar =>{
        bar.style.background = '';
        bar.style.color = '';
    })
    document.querySelectorAll(`.Window`).forEach(wins =>
    {
        wins.style.zIndex = 1
    })

    TopBars.forEach(bar => {
        bar.style.background = 'var(--selection-color)';
        bar.style.color = 'white';
        CurrentWindow.style.zIndex = 99999; 
    })

    startX = event.clientX - CurrentWindow.offsetLeft;
    startY = event.clientY - CurrentWindow.offsetTop;

    if(event.target.closest(".WTop-Bar")){
        activeMoveHandler = (e) => {
            let newX = e.clientX - startX;
            let newY = e.clientY - startY;
            CurrentWindow.style.top = newY + 'px';
            CurrentWindow.style.left = newX + 'px';
        };

        document.addEventListener('mousemove',  activeMoveHandler);
    
        document.addEventListener('mouseup', function _up() {
            document.removeEventListener('mousemove', activeMoveHandler);
            document.removeEventListener('mouseup', _up);

        }, { once: true });
    }
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