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
            <div id="1" style="display:flex; flex-direction: column; width:100%; padding:15px;">
                <p>System:</p>
                <ul>
                    <li>Web 95</li>
                    <label>Input type Radio</label>
                    <input type="radio">
                </ul>
                <p>Computer:</p>
                <ul>
                    <input type="text">
                    <li>Plentium(r)</li>
                    <li>64.0MB RAM</li>
                </ul>
                <div style="display:flex; flex-direction: row;">
                    <label>Volume:</label>
                    <label>Low</label>
                    <input type="range" min="1" max="11" value="5" />
                    <label>High</label>
                </div>
            </div>
        </section>
        <div>
            <button>Ok</button>
            <button onclick="LocateCloseWindow(this)" >Cancel</button>
        </div>
    </div>
    `).BuildWindow();
}