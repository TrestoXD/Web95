let debug = true;
var windowmanager = localStorage.getItem('windowmanager')

window.onload = function(){
    localStorage.setItem("totalsoft", 0)
    console.log("LocalStorage:",localStorage.getItem("totalsoft"));

    if(debug == true || localStorage.getItem('visited', false)){
        console.log("first Time")
        
        WellcomeExe();
        localStorage.setItem('visited', true);
    }
}

function WellcomeExe(){
    WindowExe('Welcome',600, 350, null ,false, false,`        
        <div class="WContent" style="padding-left:20px; padding-right:20px; margin-top: 25px;"> 
            <h1>Welcome to my Devlog</h1>
            <div class="Wsided-left"> 
                <div class="WNotes" style="margin-top: 25px; margin-right:10px; width:365px; height:160px"> 
                    <div><img src="./Styles/icons/bulb.svg" style="width: 50px"></div> 
                    <div style="padding-top:20px"> <b>Did you know...</b> <p id="welcomefact">Texto...</p> </div>      
                </div>
                <div style="margin-top: 25px; margin-right:10px; display:flex; flex-direction:column;">
                    <button class="button" style="padding:4px; width:130px; margin-bottom:8px" onclick=loggerEXE()> <span class="underline">W</span>indows Tour </button>
                    <button class="button" style="padding:4px; width:130px; margin-bottom:8px" onclick=MediaplayerEXE()> What's <span class="underline">N</span>ew </button>
                    <button class="button" style="padding:4px; width:130px; margin-bottom:8px" onclick=NoticiasEXE()> My <span class="underline">C</span>omputer </button>
                    <button class="button" style="padding:4px; width:130px; margin-bottom:8px" onclick=RandomFact()> Next <span class="underline">T</span>ip </button>
                    <hr style="margin-top:80px;">
                </div>
            </div>
            <div class="Wsided-left"> 
                <div style="display:flex; width:438px; align-items: center;"> 
                    <label class="input" style="margin-top:10px">
                        <input type="checkbox">
                        <img class="Checkmark" src="./Styles/icons/checkmark-disabled.svg"></img>
                    </label>
                    <p style="margin-top:16px">Show this Welcome Screen next time you start the web</p>
                </div>
                <div>
                    <button class="button" style="padding:4px; width:130px; margin-top:8px"> Close </button>
                </div>
            </div>    
        </div>`
    );
    RandomFact();
    //Recharge();
}


function SetupExe(){
    WindowExe('Tresto Setup', 500, 120, null, false, `
        <div style="display:flex; ">
        <div> <img src="./Styles/icons/Warning.png" style="width:100px"> </div>
        <div> 
            <p> Setup has finished configuring the channel </p>
            <p> You must upload a  new video before the new settings will take effect.</p>
        </div>
        </div>`
    );
}

function RandomFact(){
    let generatedFact = "";
    let generatedNum = 0;

    let Facts = ['Fire burns','A cosmic ray wasn`t the problem on the glitch in the Mario 64 Speedrun', 'You contain atoms older than the Sun ',
        'Shoes go in the feet','When the Egipt piramids existed the Mamuts wheren`t extinct',  'Pangolins are the only mammal with scales ',
        'Did you know that Cleopatra took almost as long to build the pyramids as we have to build her?', 'Lightning can turn sand into glass ',
        'Did you know that the only parts of the body that continue to grow are the nose and ears?', 'A sincere act of kindness always inspires another.', 
        'Great power comes with a great Responsiblity', 'That`s all it is, a leap of faith', 'Giraffes give birth standing up',
        'Whatever adversity we face, whatever battle rages within us, we always have a choice and can always choose to do what is right.', 
        'Your decisions... Your accions... That`s what defines you', 'leftover pasta has extra health benefits', 'Mount Everest contains marine rocks, proving that the highest point on Earth was once at the bottom of the ocean',
        'Dreams save us. Dreams lift us up and transform us into something better. And on my soul, I swear that until my dream of a world where dignity, honor and justice are the reality we all share, I`ll never stop fighting.',
        'The creators of Barbie and hot wheels ere husband and wife', 'The name of the most famouse gay club in Lisbon is called Trumps'];

    function getRandomInt(min,max){
        const mincel = Math.ceil(min);
        const maxflor = Math.floor(max);
        return Math.floor(Math.random() * (maxflor - mincel) + mincel);
    }

    generatedNum = getRandomInt(0,Facts.length);

    generatedFact = Facts[generatedNum];

    console.log(generatedNum)
    console.log(generatedFact)

    document.getElementById("welcomefact").innerText = generatedFact;
}

console.log(windowmanager)

function AddWindowManager(){
    if(windowmanager == null || windowmanager >= 0){
        const script = document.createElement('script');
        script.src = "./Scripts/WindowManager.js";

        document.getElementById("Process").appendChild(script);

        localStorage.setItem('windowmanager', 1);
    }
    else{
        localStorage.setItem('windowmanager', 0);
    }
}