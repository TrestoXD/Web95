oncontextmenu = (e) => {
    let rightmenudiv = document.getElementById("contextmenu");
    if(rightmenudiv === null){
        e.preventDefault();
        let x = e.pageX - 5
        let y = e.pageY - 5

        console.log('la x es:'+ x)

        ContextmenuExe(x +'px', y +'px', false, true, `
            <button id="conbt">Arrange Icons</Button>
            <Button id="conbt">Line Up Icons</Button> <hr></hr> 
            <button id="conbt" class="disabled">Paste</button>
            <button id="conbt" class="disabled">Paste Shortcut</button>
            <button id="conbt">Undo Delete</button> <hr></hr> 
            <button id="conbt">New</button> <hr></hr> 
            <button id="conbt" onclick='ErrorMenu("An error message to annoy you.", "Context menu Failed")' class='textbutt'>Properties</button>
        `);
    }
}