let elementmenu = document.getElementById("secmenu");

function MainmenuExe(X, Y, Bottom, autohide, content){
    let menu = document.createElement("div")
    menu.id = "minmenu"

    if(Bottom == true){
        menu.style = `bottom:${Y}; left:${X}`
    }else{
        menu.style = `top:${Y}; left:${X}`
    }
    

    if(menu.parentNode){
        menu.parentNode.removeChild(menu);
    }

    if(autohide == true){
        menu.onmouseleave = () => contextmenu.outerHTML = '', onmenu = false, elementmenu.innerHTML = '';  
        
    }else{
    }

    menu.innerHTML = content;
    document.body.appendChild(menu)
}