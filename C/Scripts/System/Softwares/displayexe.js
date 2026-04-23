var r = document.querySelector(':root');

function displayEXE(){
    WindowExe('Display Properties', 400, 410, null, true, true, `
        <div class="display">
            <button class="display-button disabled">Background</button>
            <button class="display-button disabled">Screen Saver</button>
            <button class="display-button-selected">Apperance</button>
            <button class="display-button disabled">Settings</button>
        </div>
        <div class="display-properties">
        <div class="preview">
            <div style="width:330px; height: 150px; transform: translateX(10px)translateY(10px); background-color: var(--body-color);" class="preview-Window">
                <div class="Preview-WTop-Bar"> 
                    <div><p>Inactive Window</p> </div> 
                    <div> 
                        <button> <img src="./Styles/icons/minimize.svg" alt="0"> </button> 
                        <button> <img src="./Styles/icons/maximize.svg" alt="1"> </button>
                        <button style="margin-left:2px"> <img src="./Styles/icons/close.svg" alt="r"> </button>
                    </div>   
                </div>
            </div>
            <div style="width:330px; height: 130px; background-color: var(--body-color); transform: translateX(16px)translateY(-115px);" class="preview-Window">
                <div class="Preview-WTop-Bar" style="background: var(--selection-color); color: white;"> 
                    <div><p>Active Window</p> </div> 
                    <div> 
                        <button> <img src="./Styles/icons/minimize.svg" alt="0"> </button> 
                        <button> <img src="./Styles/icons/maximize.svg" alt="1"> </button>
                        <button style="margin-left:2px"> <img src="./Styles/icons/close.svg" alt="r"> </button>
                    </div>   
                </div>
                <div style="display:flex; flex-direction: row;">
                    <p style=" padding: 4px; margin:0; padding-left: 6px; padding-right: 6px;">Normal</p>
                    <p style=" padding: 4px; margin:0; padding-left: 6px; padding-right: 6px; color: var(--secbody-color); text-shadow: 1px 1px 0px white;">Disabled</p>
                    <p style=" padding: 4px; margin:0; padding-left: 6px; padding-right: 6px; background-color: var(--selection-color); color:white;">Selected</p>
                </div>
            </div>
            <div style="width:250px; height: 65px; background-color: var(--body-color); transform: translateX(22px)translateY(-180px);" class="preview-Window">
                <div class="Preview-WTop-Bar" style="background: var(--selection-color); color: white;"> 
                    <div><p>Message Box</p> 
    
                    </div> 
                    <div> 
                        <button style="margin-left:2px"> <img src="./Styles/icons/close.svg" alt="r"> </button>
                    </div>   
                </div>
                Message Text
            </div>
        </div>
            <div class="I-2">
                <div class="display-properties-box">
                    <h4 class="display-properties-title">Background Color</h4>
                    <select name="background" id="background" class="display-properties-select" onchange="displaybackgroundchange(this.value)">
                        <option value="#008080">Classic</option>
                        <option value="#482548">Eggplant</option>
                        <option value="#000080">Eiffel 65</option>
                        <option value="#a2dbd2">Shore</option>
                        <option value="clouds">Clouds</option>
                        <option value="bliss">Bliss</option>
                    </select>
                </div>
                <div class="display-properties-box">
                    <h4 class="display-properties-title">Selection Color</h4>
                    <select name="background" id="background" class="display-properties-select" onchange="displayselectionchange(this.value)">
                        <option value="#000080">Classic</option>
                        <option value="linear-gradient(90deg,#002060 0%, #a0c8ef 100%)">Me</option>
                        <option value="#a85400">Highliter</option>
                        <option value="#00a800">Plant</option>
                        <option value="#800000">Brick</option>
                        <option value="#00bfbc">Aqua</option>
                    </select>
                </div>
            </div>
            <div class="I-2">
                <div class="display-properties-box">
                    <h4 class="display-properties-title">Body Color</h4>
                    <select name="background" id="background" class="display-properties-select" onchange="displaybodychange(this.value)">
                        <option value="#c3c3c3">Classic</option>
                        <option value="#f4c1ca">Pinky</option>
                        <option value="#8397c3">SKY</option>
                        <option value="#d3c3b6">Desert</option>
                    </select>
                </div>
            </div>
            <div class="I-2">
           </div>
        </div>
        <div class="display-right">
            <button class="display-right-button">Ok</button>
            <button class="display-right-button">Cancel</button>
            <button class="display-right-button">Apply</button>
        </div>
        `);
}

function displaybackgroundchange(color){
    if(color == "clouds"){
        r.style.setProperty('--bakground-color', "url('./Wallpapers/Colouds.png')");
    }else if(color == "bliss"){
        r.style.setProperty('--bakground-color', "url('./Wallpapers/bliss.png')");
    }else{
        r.style.setProperty('--bakground-color', color); 
    }
    localStorage.setItem('settings_background', color);
}
function displayselectionchange(color){
    r.style.setProperty('--selection-color', color);
    localStorage.setItem('settings_selection', color);
}
function displaybodychange(color){
    if(color == "#c3c3c3"){
        r.style.setProperty('--body-color', color);
        r.style.setProperty('--secbody-color', "#a0a0a0");
        r.style.setProperty('--terbody-color', "#808080");
    }else if(color == "#f4c1ca"){
        r.style.setProperty('--body-color', color);
        r.style.setProperty('--secbody-color', "#be8d96");
        r.style.setProperty('--terbody-color', "#a16a73");
    }else if(color == "#8397c3"){
        r.style.setProperty('--body-color', color);
        r.style.setProperty('--secbody-color', "#6376a0");
        r.style.setProperty('--terbody-color', "#3b5180");
    }else if(color == "#d3c3b6"){
        r.style.setProperty('--body-color', color);
        r.style.setProperty('--secbody-color', "#b9a798");
        r.style.setProperty('--terbody-color', "#887362");
    }
    localStorage.setItem('settings_body', color);
}
// colores background
// def: #008080
// egg: #482548
// eif: #000080