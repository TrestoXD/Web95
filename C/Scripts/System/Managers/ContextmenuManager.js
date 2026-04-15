function ContextmenuExe(X, Y, Bottom, autohide, content){
    let menu = document.createElement("div")
    menu.id = "contextmenu"

    if(Bottom == true){
        menu.style = `bottom:${Y}; left:${X}`
    }else{
        menu.style = `top:${Y}; left:${X}`
    }
    

    if(menu.parentNode){
        menu.parentNode.removeChild(menu);
    }

    if(autohide == true){
        menu.onmouseleave = () => contextmenu.outerHTML = '', onmenu = false;    
    }else{
    }

    menu.innerHTML = content;
    document.body.appendChild(menu)
}