function msinfo32exe(){
    new explorer("System Information", undefined,"The program to chech the infromation of the system","500","500", null,false,true,true,true,false,false,true,true,
    `
    <div class="WNavInterior">
        <nav>
            <li>General</button>
            <button>Device Manager</button>
            <button>Hardware Profiles</button>
            <button>Performance</button>
        </nav>
        <section id="tabpanel">
            <div>    
                <div>
                
                </div>
                <div>
                    <p>System:</p>
                    <ul>
                        <li>Web 95</li>
                        <input tpye="radio">
                    </ul>
                    <p>Computer:</p>
                    <ul>
                        <li>Plentium(r)</li>
                        <li>64.0MB RAM</li>
                        
                    </ul>
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