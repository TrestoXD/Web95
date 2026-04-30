//// THIS IS THE NEW CREATION WINDOW


class explorer{
    constructor(title = "Hello World" ,pid = "00001" ,description = "This is a process without description", width = "450", height = "300", image = "./Styles/icons/System/windowslogo.ico", resizeable = true, maximizable = true, ontop = false, movable = true, buttonontaskbar = true,content = "Hello World! this is text here!"){
        this.title = title
        this.pid = pid
        this.description = description
        this.width = width
        this.height = height
        this.image = image
        this.resizeable = resizeable
        this.maximizable = maximizable
        this.ontop = ontop
        this.buttonontaskbar = buttonontaskbar
        this.content = `
            <div class="WTop-Bar" pid="${this.pid}" title="${this.title}"> 
                <div> <img src="${this.image}" class="icon WTop-Bar-detectable" id="${pid}"> <p class="WTop-Bar-detectable" id="${this.pid}">${this.title}</p> </div> 
                <div> 
                    <button onclick=""> <img src="./Styles/icons/minimize.svg" alt="0"> </button> 
                    <button onclick=""> <img src="./Styles/icons/maximize.svg" alt="1"> </button>
                    <button onclick="new explorer().CloseWindow('${this.title}','${this.pid}');"> <img src="./Styles/icons/close.svg" alt="r"> </button>
                </div>  
            </div>
            <div class="WInterior">
                ${content}
            </div> `;
    }

    BuildWindow(){
        // CREATES THE MAIN WINDOW AND LOCATES THE POSITION
        const window = document.createElement("div");
        const windowlocation = document.getElementById("Desktop");

        // ADDS ALL THE VARIABLES NEEDED INTO THE WINDOW 
        window.classList.add("Window");
        window.setAttribute('pid',this.pid);
        window.setAttribute('title', this.title);
        window.style.width = this.width + "px";
        window.style.height = this.height + "px";
        window.style.left = ((window.innerWidth - this.width)  / 2 + "px");
        window.style.top = ((window.innerHeight - this.height)  / 2 + "px");
        window.style.zIndex = 1;
        window.innerHTML = this.content

        // ADDS THE WINDOW TO YOUR SCREEN :D
        windowlocation.insertAdjacentElement("afterbegin", window);
        window.addEventListener("click", explorerclickManager)
        // SUPER COOL CONSOLE LOG FOR THE DEBUGS :O
        console.log(`New Window created: TITLE: "${this.title}" PID: ${this.pid}`)
        
        // CREATE THE BUTTON ON THE TASKBAR
        if(this.buttonontaskbar){
        new explorer().BuildTaskbarButton();
        }
    }
    BuildTaskbarButton(){
        // CREATES THE TASKBAR BUTTON ELEMENT AND LOCATES THE POSITION WHERE THE APP BELONGS
        const taskbarbutton = document.createElement("button");
        const taskbarbuttonlocation = document.getElementById("Apps");

        // ADDS ALL THE VARIABLES NEEDED INTO THE TASKBAR BUTTON;
        taskbarbutton.classList.add("taskbar-button");
        taskbarbutton.setAttribute('pid',this.pid);
        taskbarbutton.setAttribute('title',this.title);
        taskbarbutton.innerHTML = `<img src="${this.image}"> <p>${this.title}</p>`
        
        // ADDS THE BUTTON TO YOUR SCREEN
        taskbarbuttonlocation.insertAdjacentElement('beforeend', taskbarbutton);
    }
    CloseWindow(title ,pid){
        // LOCATES ALL THE ELEMENTS WITH THIS COMMON TAGS AND VANISHED THEM FOREVER :D
        const elementsToRemove = document.querySelectorAll(`[title="${title}"][pid="${pid}"]`);

        elementsToRemove.forEach(el => el.remove());
    }
}

function explorerclickManager(){
    console.log("AA");
}