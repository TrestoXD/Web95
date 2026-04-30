function WindowExe(title, width, height, img ,maximizable, ontop, content){
    let icon;

    try {
        mainmenuRemove();
        //document.getElementById("secmenu").outerHTML = ''   
    } catch (error) {
        //console.log("no contextmenu exists")
    }

    //TotalWindows
    localStorage.setItem("totalsoft", parseInt(localStorage.getItem('totalsoft'))+1)
    console.log("The LocalStorage-windowexe:",localStorage.getItem("totalsoft"));

    //Window
    const mainDiv = document.createElement("win" + localStorage.getItem("totalsoft"));
    let ide = "win" + localStorage.getItem("totalsoft");
    let top = localStorage.getItem("totalsoft");
    //console.log("el id es " + ide)
    let maxbt = ('max' + top)
    //console.log("el id del boton es:" + maxbt)
    let btide = ('bt' + top)

    mainDiv.classList.add("Window")
    mainDiv.id = ide;
    mainDiv.style.width = width + 'px';
    mainDiv.style.height = height + 'px';
    mainDiv.style.left = ((window.innerWidth - width)  / 2 + 'px');
    mainDiv.style.top = ((window.innerHeight - height)  / 2 + 'px');
    mainDiv.style.zIndex = 1;



    if( img == null){
        icon = null;
    }else{
        icon = ("./Styles/AppIcons/"+img);
    }

    if(ontop == true){
        mainDiv.style.zIndex = 9999;
    } else{
        mainDiv.style.zIndex = 1;
    }

    if(maximizable == true){
        if(icon == null){
            mainDiv.innerHTML = `        
            <div class="WTop-Bar" id="${top}"> 
                <div><p class="WTop-Bar-detectable" id="${top}">${title}</p> </div> 
                <div> 
                    <button onclick="minimizeWindow('${localStorage.getItem("totalsoft")}')"> <img src="./Styles/icons/minimize.svg" alt="0" style="transform: translate(-50%, -30%);"> </button> 
                    <button id="${btide}" onclick="maximizeWindow('${localStorage.getItem("totalsoft")}')"> <img src="./Styles/icons/maximize.svg" alt="1" id="${maxbt}"> </button>
                    <button style="margin-left:2px" onclick="closeWindow('${localStorage.getItem("totalsoft")}')"> <img src="./Styles/icons/close.svg" alt="r"> </button>
                </div>   
            </div>` + content;
        }else{
            mainDiv.innerHTML = `        
            <div class="WTop-Bar" id="${top}"> 
                <div> <img src="${icon}" class="icon WTop-Bar-detectable" id="${top}"> <p class="WTop-Bar-detectable" id="${top}">${title}</p> </div> 
                <div> 
                    <button onclick="minimizeWindow('${localStorage.getItem("totalsoft")}')"> <img src="./Styles/icons/minimize.svg" alt="0" style="transform: translate(-50%, -30%);"> </button> 
                    <button id="${btide}" onclick="maximizeWindow('${localStorage.getItem("totalsoft")}')"> <img src="./Styles/icons/maximize.svg" alt="1" id="${maxbt}"> </button>
                    <button style="margin-left:2px" onclick="closeWindow('${localStorage.getItem("totalsoft")}')"> <img src="./Styles/icons/close.svg" alt="r"> </button>
                </div>   
            </div>` + content;
        }
    } else{
        if(icon == null){
            mainDiv.innerHTML = `        
            <div class="WTop-Bar" id="${top}"> 
                <div> <p class="WTop-Bar-detectable" id="${top}">${title}</p> </div> 
                <div> 
                    <button style="margin-left:2px" onclick="closeWindow('${localStorage.getItem("totalsoft")}')"> <img src="./Styles/icons/close.svg" alt="r"> </button>
                </div>   
            </div>` + content;
        }else{
            mainDiv.innerHTML = `        
            <div class="WTop-Bar" id="${top}"> 
                <div> <img src="${icon}" class="icon WTop-Bar-detectable" id="${top}"> <p class="WTop-Bar-detectable" id="${top}">${title}</p> </div> 
                <div> 
                    <button style="margin-left:2px" onclick="closeWindow('${localStorage.getItem("totalsoft")}')"> <img src="./Styles/icons/close.svg" alt="r"> </button>
                </div>   
            </div>` + content;
        }
    }

    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(mainDiv, currentDiv);
    //App in Taskbar

    const currentTaskbar = document.getElementById("Apps");
    const mainButton = document.createElement("button");

    mainButton.classList.add('taskbar-button');
    mainButton.id = 'btt' + localStorage.getItem("totalsoft");
    if(icon == null){
        mainButton.innerHTML = `<p>${title}</p>`
    }else{
        mainButton.innerHTML = `<img src="${icon}"> <p>${title}</p>`
    }

    currentTaskbar.insertAdjacentElement('beforeend', mainButton)

    currentselected = localStorage.getItem("currentselected")

    if(currentselected == 0){
        currentselected = top;
        localStorage.setItem("currentselected", top);
        document.getElementById(top).style.background = "var(--selection-color)";
        document.getElementById(top).style.color = "white";
        document.getElementById('win'+top).style.zIndex = 40;    
    }else{

        document.getElementById(currentselected).style.background = color_deselected;
        document.getElementById(currentselected).style.color = "var(--body-color)";
        document.getElementById('win'+currentselected).style.zIndex = 1;   
        
        currentselected = top;
        localStorage.setItem("currentselected", top);
        document.getElementById(top).style.background = "var(--selection-color)";
        document.getElementById(top).style.color = "white";
        document.getElementById('win'+top).style.zIndex = 40;    
    }
}

//Nota: Una ventana tendría que tratarse como un objeto separado, con métodos para saber su id, estado, etc. Así podría funcionar el botón de "Cerrar" en el "Bienvenido"