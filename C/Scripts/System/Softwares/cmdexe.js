

function CmdEXE(){
    WindowExe('MS-DOS Prompt', 400, 200, 'msdos1.ico', true, true, `
    <div class="Command-prompt" id="Commandprompt" onclick="document.getElementById('inputcommand').focus()"> 
    
    <p>Vito Minaya González MIT License</p>
    <p>     (C)Copyright Vito Minaya González 2026.</p>
    
    <span> C:&#92;Web95 > </span><input type="text" id="inputcommand" autocomplete="off"> 
    
    </div>
        `)
    document.getElementById('inputcommand').addEventListener('keypress',CMDINPUT);
    document.getElementById('inputcommand').focus();
}

function CMDINPUT(e){
    let CMDOUTPUT = document.getElementById("Commandprompt");

    if(e.keycode === 13 || e.key === 'Enter'){

        let result = document.createElement("div")

        commandValue = document.getElementById('inputcommand').value;

        console.log(commandValue);

        let newPrompt = document.createElement("div");

        //Comandos!

        //Comando default
        if(commandValue == ""){
            result.innerHTML = `<span> C:&#92;Web95 > </span><input type="text" id="inputcommand">`
            document.getElementById('inputcommand').outerHTML = '';
        }

        //Borrate la cuenta
        else if (commandValue == "borrate la cuenta"){
            result.innerHTML = `
            <p> Borratela tú. </p>`

            newPrompt.innerHTML = `<span> C:&#92;Web95 > </span><input type="text" id="inputcommand">`
            document.getElementById('inputcommand').outerHTML = `<span>${commandValue}</span>`; 
        }

        //Comando no reconozido
        else{
            result.innerHTML = `
            <p> ${commandValue} is not recognized as an internal or external command. </p>`

            newPrompt.innerHTML = `<span> C:&#92;Web95 > </span><input type="text" id="inputcommand">`
            document.getElementById('inputcommand').outerHTML = `<span>${commandValue}</span>`; 
        }

        CMDOUTPUT.appendChild(result)
        CMDOUTPUT.appendChild(newPrompt)
        document.getElementById('inputcommand').addEventListener('keypress',CMDINPUT);

        document.getElementById('inputcommand').focus();
    } 
}
