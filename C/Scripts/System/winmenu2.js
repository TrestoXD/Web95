function MainmenusecExe(X, Y, Bottom, autohide, content){

    let elementmenu = document.getElementById("secmenu");

    if(!elementmenu)
    {
        let menu = document.createElement("div")
        menu.id = "secmenu"

        if(Bottom == true){
            menu.style = `bottom:${Y}; left:${X}`
        }else{
            menu.style = `top:${Y}; left:${X}`
        }


        if(menu.parentNode){
            menu.parentNode.removeChild(menu);
        }

        if(autohide == true){
            menu.onmouseleave = () => secmenu.outerHTML = '', onmenu = false; 
            
            if(document.getElementById("minmenu").onmouseenter && document.getElementById("secmenu").onmouseenter){ 
                console.log("hm")
            }else{
                try{secmenu.outerHTML = ''}
                catch(error){console.log("no secmenu")}
            }                
        }else{
        }
        menu.innerHTML = content;
        document.body.appendChild(menu)
    }else{
        if(Bottom == true){
            elementmenu.style = `bottom:${Y}; left:${X}`
        }else{
            elementmenu.style = `top:${Y}; left:${X}`
        }

        elementmenu.innerHTML = content;
    }
}

function Delete_MainmenusecExe(){
    let elementmenu = document.getElementById("secmenu");

    try {
        elementmenu.outerHTML = ''
    } catch (error) {
        
    }

}