function msinfo32exe(){
    new explorer("System Information", undefined,"The program to chech the infromation of the system","500","500", null,false,true,true,true,false,false,true,true,
    `
    <div class="WNavInterior">
        <nav>
            <button>General</button>
            <button>Device Manager</button>
            <button>Hardware Profiles</button>
            <button>Performance</button>
        </nav>
        <section id="tabpanel">    
            <img src="./Styles/images/computermsinfo32.png" style=" width:200px; height: 200px; margin: 25px">
            <div id="1" style="display:flex; flex-direction: column; width:100%; padding:15px;">
                <p>System:</p>
                <ul>
                    <li>Web 95</li>
                    <li id="github-version">0.1.17</li>
                </ul>
                <p>Registered to:</p>
                <ul>
                    <li>Your Name</li>
                    <li>00000-OEM-0000000-00000</li>
                </ul>
                <p>Computer:</p>
                <ul>
                    <li>Plentium(r)</li>
                    <li>64.0MB RAM</li>
                </ul>
            </div>
        </section>
        <div>
            <button>Ok</button>
            <button onclick="LocateCloseWindow(this)" >Cancel</button>
        </div>
    </div>
    `).BuildWindow();
}

// <div style="display:flex; flex-direction: row;">
//                    <label>Volume:</label>
//                    <label>Low</label>
//                    <input type="range" min="1" max="11" value="5" />
//                    <label>High</label>
//                </div>