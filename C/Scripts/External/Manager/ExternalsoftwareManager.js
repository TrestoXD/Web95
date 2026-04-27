/* 
    THIS SCRIPT MANAGES THE EXTERNAL SOFTWARES
    THE IDEA IS TO MAKE
*/

/* VARIABLES */


/* CREATE THE NEW APP ICONS TO THE DESKTOP */
function DesktopShortcuts_External(Name, Description, Destiny, ExecutionType, Icon){
    const button = document.createElement("button");
    button.innerHTML = `<img class="appicon" src="${Icon}"> <img src="./Styles/icons/System/Shortcut.ico" alt="" class="appdecor"><p>${Name}</p>`
    button.ondblclick = Destiny
    button.classList = 'desktop_button'
    button.id = 

    button.setAttribute('Description', Description);
    button.setAttribute('Name', Name);
    button.setAttribute('Destiny', Destiny);
    button.setAttribute('ExecutionType', ExecutionType);
    button.setAttribute('Icon', Icon);
}