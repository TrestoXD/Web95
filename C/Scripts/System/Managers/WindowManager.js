console.log("Window Manager Running")
let i = 1;

const Clicksound_data = "data:audio/wav;base64,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+P/4//X/9f//////IAAgAEUARQAoACgABQAFACoAKgAtAC0AEAAQADwAPABWAFYAIQAhAPD/8P/k/+T/AQABAB8AHwAFAAUA7P/s/+f/5//4//j/WQBZAJwAnAA3ADcA6P/o/xcAFwAbABsA3f/d/8v/y//Q/9D/2f/Z/wcABwAmACYAAQABAPj/+P8iACIAGgAaAPr/+v8KAAoABwAHAO7/7v8XABcALAAsAOL/4v/R/9H/IgAiADAAMADV/9X/s/+z/wEAAQA/AD8AIQAhAPz//P8AAAAA9//3/+b/5v/x//H/6P/o/7//v//U/9T/HAAcABoAGgDs/+z/9v/2/xMAEwAJAAkA6v/q/+f/5/8CAAIABgAGAP////8SABIACAAIAOv/6/8LAAsAKgAqABQAFAALAAsACQAJABIAEgA7ADsALAAsAPr/+v8ZABkATgBOAEIAQgAPAA8A3//f/9v/2//r/+v/4f/h/+X/5f8LAAsALAAsADEAMQAKAAoA6//r/woACgATABMA6//r/+H/4f/x//H/CAAIABYAFgD0//T/2f/Z/9z/3P/F/8X/y//L//3//f/2//b/4f/h//j/+P8AAAAACAAIABMAEwAAAAAA/v/+/w0ADQAAAAAAAwADABsAGwAOAA4A8//z//D/8P/z//P/6//r/+H/4f/u/+7/AQABAPv/+//9//3/DwAPAAEAAQDs/+z/+v/6/xAAEAAQABAA/v/+//r/+v8IAAgA9P/0/9L/0v/r/+v/CwALAPz//P/p/+n/7v/u//T/9P/3//f/4P/g/8H/wf/e/97/BwAHAP/////3//f//v/+/+v/6//i/+L/9f/1/+n/6f/X/9f/7P/s/wAAAAD1//X/3v/e/+L/4v8CAAIACwALAPb/9v/q/+r/6P/o/+j/6P/4//j/+//7/+v/6//s/+z/+v/6//r/+v/u/+7/6P/o//n/+f8HAAcA/P/8//n/+f//////+P/4//r/+v8EAAQAAAAAAPr/+v/4//j/8//z//3//f8CAAIAAQABAAwADAARABEADQANAA0ADQD/////8//z/wwADAAhACEAAAAAAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQAAAAAAAAAAAAAAAAAAAAAA/////wAAAAAAAAAAAAAAAA==";

let startX = 0, startY = 0, newX = 0, newY = 0;

document.addEventListener('mouseup', mouseUp);
document.addEventListener('mousedown', mouseDown);

let idee = 0


let color_deselected = "var(--terbody-color)";
// var(--selection-color)
let currentselected = 0;
localStorage.setItem("currentselected", '0');

function mouseDown(e){
        console.log("Mousedown")
        
        var Clicksound = new Audio(Clicksound_data);
        Clicksound.play();
        if(e.target.id == "minmenu" | e.target.id == "minmenus" | e.target.id == "secmenu") {
            console.log("en context")
        
        }else if(e.target.classList.contains("WTop-Bar")){
            idee = e.target.id 
            if(currentselected == 0){
                currentselected = idee;
                localStorage.setItem("currentselected", idee);
                document.getElementById(idee).style.backgroundColor = "var(--selection-color)";
                document.getElementById(idee).style.color = "white";
                document.getElementById('win'+idee).style.zIndex = 40;    
            }else{

                document.getElementById(currentselected).style.backgroundColor = color_deselected;
                document.getElementById(currentselected).style.color = "var(--body-color)";
                document.getElementById('win'+currentselected).style.zIndex = 1;   
                
                currentselected = idee;
                localStorage.setItem("currentselected", idee);
                document.getElementById(idee).style.backgroundColor = "var(--selection-color)";
                document.getElementById(idee).style.color = "white";
                document.getElementById('win'+idee).style.zIndex = 40;    
            }
            mouseDownHeader(e);
            

            
        }else if(e.target.classList.contains("taskbar-button")){
            console.log("en boton de la barra de tareas")
            deminimizeWindow(e.target.id.replace("btt", ""))
        }else if(e.target.classList.contains("overlay")){
            console.log(e.target)
            try {
                mainmenuRemove();
                //document.getElementById("secmenu").outerHTML = ''   
            } catch (error) {
                console.log("no contextmenu exists")
            }
        }else{
            console.log(e.target.id)
        }
}

function mouseDownHeader(e){
    console.log("El id és: "+ idee)
    currentclick = e.target.id;
    console.log('elcurrentclick es: ' + currentclick)
    Windows = document.getElementById('win' + idee)

    e.preventDefault();

    startX = e.clientX - Windows.getBoundingClientRect().left;
    startY = e.clientY - Windows.getBoundingClientRect().top;

    console.log("StartX", startX);
    console.log("StartY", startY);
    
    document.addEventListener('mousemove', mouseMove);
}

function mouseMove(e){
    //Con el movimiento del mouse, se actualiza la posición de la ventana
    e.preventDefault();

    newX = e.clientX - startX;
    newY = e.clientY - startY;

    Windows.style.top = (newY) + 'px';
    Windows.style.left = (newX) + 'px';
}

function mouseUp(e){
    //Cancela el movimiento de la ventana al soltar el mouse
    document.removeEventListener('mousemove', mouseMove);
}

function minimizeWindow(ides){
    //minimiza la ventana
    document.getElementById('win'+ ides).style.visibility = 'hidden';
}
let olx = 100;
let oly = 100;
let olposx = 0;
let olposy = 0;
function maximizeWindow(ides){
    //guarda variables
    olx = document.getElementById('win'+ ides).style.width;
    oly = document.getElementById('win'+ ides).style.height;
    olposx = document.getElementById('win'+ ides).style.left
    olposy = document.getElementById('win'+ ides).style.top

    //maximiza la ventana
    document.getElementById('win'+ ides).style.width = window.innerWidth + 'px';
    document.getElementById('win'+ ides).style.height = window.innerHeight + 'px';
    document.getElementById('win'+ ides).style.top = '0px';
    document.getElementById('win'+ ides).style.left = '0px';   

    console.log(`el id del boton es: ${this.id}`)

    document.getElementById('max'+ ides).src = './Styles/icons/restore.svg'
    document.getElementById('bt'+ ides).setAttribute("onClick", "restoreWindow("+ides+");")
}
function restoreWindow(ides){
    document.getElementById('win'+ ides).style.width = olx;
    document.getElementById('win'+ ides).style.height = oly;
    document.getElementById('win'+ ides).style.top = olposx;
    document.getElementById('win'+ ides).style.left = olposy;  

    document.getElementById('max'+ ides).src = './Styles/icons/maximize.svg'
    document.getElementById('bt'+ ides).setAttribute("onClick", "maximizeWindow("+ides+");")
}

function deminimizeWindow(ides){
    //desminimiza la ventana al hacer click en el botón de la barra de tareas
    console.log("Deminimizar ventana " + ides)
    document.getElementById('win'+ ides).style.visibility = 'visible';
}

// Cerrar ventana
function closeWindow(ides){
    //elimina la ventana y el botón de la barra de tareas
    document.getElementById('win'+ ides).outerHTML = ' ';
    document.getElementById('btt'+ides).outerHTML = ' ';

    currentselected = 0;
    localStorage.setItem("currentselected", 0);
}

