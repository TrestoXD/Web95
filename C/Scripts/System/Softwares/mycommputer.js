function MycomputerEXE(){
    WindowExe('My Computer', 400, 350, 'mycomputer.ico', true, true, `
        <div class="explorer_topbar">
            <button class="disabled"><span class="underline">F</span>ile</button>
            <button class="disabled"><span class="underline">E</span>dit</button>
            <button class="disabled"><span class="underline">V</span>iew</button>
            <button class="disabled"><span class="underline">H</span>elp</button>
        </div>
        <hr>
        <div>
            <select>
                <option>My Computer</option>
            </select
            <button></button> <!-Back->
            <button></button> <!-Cut->
            <button></button> <!-Copy->
            <button></button> <!-Paste->
            <button></button> <!-Undo->
        </div>
        <div>
            <button> <p>5&frac14; Floppy (A:)</p>
            <button> <p>5&frac14; Floppy (B:)</p>
            <button> <p>Windows_95(C:)</p> </button>
            <button> <p>Control Panel</p> </button>
        </div>
        <div class="explorer_bottombar">
            <p>3 object(s)</p>
            <p></p>
        </div>
        `);
}