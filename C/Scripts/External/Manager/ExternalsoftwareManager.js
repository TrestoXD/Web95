/* 
    THIS SCRIPT MANAGES THE EXTERNAL SOFTWARES
    THE IDEA IS TO MAKE
*/

/* VARIABLES */


/* MAIN EXECUTION 
    DesktopShortcuts_External("Test","Jonny","PapeleraExe()","basic","./Styles/AppIcons/mycomputer.ico")
*/



/* CREATE THE NEW APP ICONS TO THE DESKTOP */
function DesktopShortcuts_External(Name, Description, Destiny, ExecutionType, Icon){
    const button = document.createElement("button");
    const buttonpos = document.getElementById("Overlay");
    
    button.innerHTML = `<img class="appicon" src="${Icon}"> <img src="./Styles/icons/System/Shortcut.ico" alt="" class="appdecor"><p>${Name}</p>`
    button.classList = 'desktop_button'

    button.setAttribute('ondblclick', Destiny)
    button.setAttribute('Description', Description);
    button.setAttribute('Name', Name);
    button.setAttribute('Destiny', Destiny);
    button.setAttribute('ExecutionType', ExecutionType);
    button.setAttribute('Icon', Icon);

    buttonpos.insertAdjacentElement('beforeend',button);
}