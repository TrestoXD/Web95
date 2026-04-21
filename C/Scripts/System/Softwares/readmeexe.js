let height = 400

function ReadmeEXE(){
    WindowExe('ReadMe.txt', 400, height, null, true, true, `
    <div class="explorer_topbar">
        <button class="disabled"><span class="underline">F</span>ile</button>
        <button class="disabled"><span class="underline">E</span>dit</button>
        <button class="disabled"><span class="underline">V</span>iew</button>
        <button class="disabled"><span class="underline">H</span>elp</button>
    </div>
    <div class="notepad" id="txt">
        <textarea>
------------------------------------------------------------------------------------------
                        WEB 95 General Information

                                    MARCH 2026
------------------------------------------------------------------------------------------
    
Web 95 is an "API" for making your own Windows 95 Like Website! This repository is only the template for your website.

--------------------------
How to Use it?
--------------------------

If used, please credit! 
You can change everything in the Website But it's thinked to only change the External.css and The External Software Folder, so you can create your own Software in the website, so when the Repo is updated you don't lose your work.
        </textarea>
    </div>
        `);
}