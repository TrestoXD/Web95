window.onerror = function(error){
    ErrorMenu(error, 'System Error');
}
function ErrorMenu(errormsg, title){
    WindowExe(title, 300, 100, null, false, true, ` <div style="padding:4px; display:flex; align-items:center;"> <img src="./Styles/icons/System/Warning.png" style="width:70px; height:70px"> <p>${errormsg}</p></div>`);
}