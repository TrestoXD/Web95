function PapeleraExe(){
    WindowExe('Recycle bin', 400, 250, 'emptyreciclebin.png', true, true, `
    <div class="papelera">
        <div class="explorer_topbar">
            <button class="disabled"><span class="underline">F</span>ile</button>
            <button class="disabled"><span class="underline">E</span>dit</button>
            <button class="disabled"><span class="underline">V</span>iew</button>
            <button class="disabled"><span class="underline">H</span>elp</button>
        </div>
        <div class="archivos-papelera">
            <table class="archivos-papelera-tabla" id="papelera-table">
                <tr class="archivos-papelera-tipos">
                    <td>Name</td>
                    <td>Original Localization</td>
                    <td>Date Deleted</td>
                    <td>Type</td>
                    <td>Size</td>
                </tr>
                <tr class="archivos-papelera-archivos">
                    <td>SETUPLOG.TXT</td>
                    <td>C:&#92</td>
                    <td>8/1/26 14:56 </td>
                    <td>text Document</td>
                    <td>1 KB</td>
                </tr>
                <tr class="archivos-papelera-archivos">
                    <td>fermium-ab5839d0afnna043</td>
                    <td>C:&#92USERS&#92PROYECTOS</td>
                    <td>3/11/25 20:41 </td>
                    <td>Folder</td>
                    <td>4.245 KB</td>
                </tr>
                <tr class="archivos-papelera-archivos">
                    <td>fermium-rb2894n23edq2ea</td>
                    <td>C:&#92USERS&#92PROYECTOS</td>
                    <td>3/11/25 20:36 </td>
                    <td>Folder</td>
                    <td>1 KB</td>
                </tr>
                <tr class="archivos-papelera-archivos">
                    <td>KAREN</td>
                    <td>C:&#92USERS&#92PROYECTOS</td>
                    <td>5/11/25 17:13 </td>
                    <td>Folder</td>
                    <td>29 KB</td>
                </tr>
            </table>
        </div>
        <hr style="border:none; margin:2px;">
        <div style="display:flex; width:100% ">
            <div class="papelerainfo" id="papelera-objetos-item">0 objeto(s)</div>
            <div class="papelerainfo" id="papelera-byte-item">0 bytes</div>
        </div>
    </div>
        `);
    const table = document.getElementById("papelera-table");
    console.log("papelera-table");

    const itemstot = document.getElementById("papelera-objetos-item");
    itemstot.innerText = (table.rows.length - 1) + " objeto(s)"

    const bytetot = document.getElementById("papelera-byte-item");
    bytetot.innerText = (sumtable() + " bytes")
    
}

function sumtable(){
    const table = document.getElementById("papelera-table");
    let total = 0;

    for (let i = 0; i < table.rows.length - 1; i++) {
        total = total + parseFloat( table.rows[ i + 1 ].cells[ 4 ].innerText);
        
    }

    return total.toFixed( 3 );
}