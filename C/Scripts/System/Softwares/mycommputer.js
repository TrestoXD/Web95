function MycomputerEXE(){
    WindowExe('My Computer', 450, 400, 'mycomputer.ico', true, true, `
        <div class="explorer_topbar">
            <button class="disabled"><span class="underline">F</span>ile</button>
            <button class="disabled"><span class="underline">E</span>dit</button>
            <button class="disabled"><span class="underline">V</span>iew</button>
            <button class="disabled"><span class="underline">H</span>elp</button>
        </div>
        <hr>
        <div class="explorer_files_topbar">
            <select style="margin-right:10px;">
                <option>My Computer</option>
            </select>

            <button style="margin-right:10px;"> <img alt="Navegate" src="./Styles/icons/System/Navegate.ico"> </button> 
            <button> <img alt="Cut" src="./Styles/icons/System/Cut.ico"> </button> 
            <button> <img alt="Copy" src="./Styles/icons/System/Copy.ico" style="transform: translate(-12px, -10px);"> </button> 
            <button style="margin-right:10px;"> <img alt="Paste" src="./Styles/icons/System/Paste.ico"> </button> 
            <button> <img alt="Undo" src="./Styles/icons/System/Undo.ico"> </button>
        </div>
        <div class="explorer_files">
            <button> <p>5&frac14; Floppy (A:)</p></button>
            <button> <p>5&frac14; Floppy (B:)</p></button>
            <button> <p>MS-dos(C:)</p> </button>
            <button> <p>Control Panel</p> </button>
        </div>
        <div class="explorer_bottombar">
            <p>3 object(s)</p>
            <p> <span class="Wbottom-expand">p</span></p>
        </div>
        `);
}