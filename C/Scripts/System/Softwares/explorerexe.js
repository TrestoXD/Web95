


class explorer{
    constructor(title = "Hello World" ,pid = "00001" ,description = "This is a process without description", width = "450", height = "300", image = "./Styles/icons/System/windowslogo.ico", resizeable = true, maximizable = true, ontop = false, movable = true, content = "Hello"){
        this.title = title
        this.pid = pid
        this.description = description
        this.width = width
        this.height = height
        this.image = image
        this.resizeable = resizeable
        this.maximizable = maximizable
        this.ontop = ontop
        this.content = `
            <div class="WTop-Bar" id="${this.pid}"> 
                <div> <img src="${this.image}" class="icon WTop-Bar-detectable" id="${pid}"> <p class="WTop-Bar-detectable" id="${this.pid}">${this.title}</p> </div> 
                <div> 
                    <button> <img src="./Styles/icons/minimize.svg" alt="0" style="transform: translate(-50%, -30%);"> </button> 
                    <button> <img src="./Styles/icons/maximize.svg" alt="1" id="${this.pid}"> </button>
                    <button style="margin-left:2px"> <img src="./Styles/icons/close.svg" alt="r"> </button>
                </div>  
            </div>
            <div class="WInterior">
                ${content}
            </div> `;
    }

    BuildWindow(){
        const window = document.createElement("div");
        const windowlocation = document.getElementById("Desktop");

        window.classList.add("Window");
        window.setAttribute('pid',this.pid);
        window.setAttribute('title', this.title);
        window.style.width = this.width + "px";
        window.style.height = this.height + "px";
        window.style.left = ((window.innerWidth - this.width)  / 2 + "px");
        window.style.top = ((window.innerHeight - this.height)  / 2 + "px");
        window.style.zIndex = 1;
        window.innerHTML = this.content

        windowlocation.insertAdjacentElement("afterbegin", window);
    }
    CloseWindow(title ,pid){
        const elementTitle = document.querySelectorAll(`["pid"=${pid}]`);
        const elementPid = document.querySelectorAll(`["title"=${title}]`);

        const ElementsExist = document.contains(elementTitle) && document.contains(elementPid);

        const Founded = !!elementTitle && !!elementPid;

        if(Founded){
            Founded.remove();
        }
    }
}