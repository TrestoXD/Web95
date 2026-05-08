function cmdexe(){
    new explorer("MS-DOS Prompt", undefined,"The run program is to run apps in a fast and easy way","450","250",'./Styles/windowsicons/msdos.ico',false,true,true,true,false,false,true,true,
    `
    <div class="WNavegation">
        <select>
            <option value="Auto">Auto</option>
            <option value="Medium">Medium</option>
            <option value="Small">Small</option>
        </select>
        <br>
        <button></button>
        <button></button>
        <button></button>
        <br>
        <button></button>
        <br>
        <button></button>
        <button></button>
        <br>
        <button></button>
    </div>
    <div class="WTerminal" id="msdosprompt">
        <p>Vito Minaya González MIT License</p>
        <p>(C)Copyright WEB95 2026.</p>
    
        <span> C:&#92;Web95 > </span><input type="text" id="inputcommand" autocomplete="off"> 
    </div>
    `).BuildWindow();

    document.getElementById('inputcommand').addEventListener('keypress',msdosinput);
    document.getElementById('inputcommand').focus();

    function msdosinput(e){
    let CMDOUTPUT = document.getElementById("msdosprompt");

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
        document.getElementById('inputcommand').addEventListener('keypress',msdosinput);

        document.getElementById('inputcommand').focus();
    } 
}

}