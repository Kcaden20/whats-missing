
var liveElem = document.querySelectorAll('.live');
var grab = document.getElementById('grab');

// counters
var counter = 1;
const timer = 3000;
grab.volume = .5;

// Array of Elements 
const allBtns = document.getElementsByTagName('button');
const allPics = document.getElementsByTagName('picture');
const allSects = document.getElementsByTagName('section');
const boDy = document.querySelector('main');
const tBar = document.getElementsByClassName('top-bar');
const bBar = document.getElementsByClassName('bottom-bar');

// OnLoad Function 
window.addEventListener("load", (event) => { 
    for(i=0; i< allBtns.length; i++ ) {
    allBtns[i].addEventListener("click", interAct);
}
})

function interAct(){
    imageSwitch();
    addRemove(boDy, 'add', 'pointer-events-none');
    grab.play();
    if(counter == 23) {
        addRemove(liveElem[1], 'add', 'display-none');
        removeLive();
        addLive();
        updateVars();
        addRemove(boDy, 'remove', 'pointer-events-none')
    } else {
    setTimeout(()=> {
        addRemove(liveElem[1], 'add', 'display-none');
        removeLive();
        addLive();
        updateVars();
        addRemove(boDy, 'remove', 'pointer-events-none')
    }, timer);

    }
}

// Show Current Image For a Second
function imageSwitch() {
    addRemove(liveElem[1], 'remove', 'display-none');
}

// remove live class from current element
function removeLive(){
    addRemove(liveElem[0], 'remove', 'live');
    addRemove(liveElem[1], 'remove', 'live');
}

// Add it to the next and reset the variable
function addLive(){
    addRemove(allBtns[counter], 'add', 'live');
    addRemove(allPics[counter], 'add', 'live');
    counter++;
    
    if (counter == 12) {
        addRemove(allSects[0], 'add', 'display-none');
        addRemove(allSects[1], 'remove', 'display-none');
        addRemove(tBar[0], 'add', 'blue-tbar');
        addRemove(bBar[0], 'add', 'blue-bbar');
    }

    if (counter == 23) {
        addRemove(allSects[1], 'add', 'display-none');
        addRemove(allSects[2], 'remove', 'display-none'); 
        addRemove(tBar[0], 'remove', 'blue-tbar');
        addRemove(bBar[0], 'remove', 'blue-bbar');
    }

    if (counter == 24) {
        addRemove(allSects[2], 'add', 'display-none');
        addRemove(allSects[3], 'remove', 'display-none');
        addRemove(tBar[0], 'add', 'red-tbar');
        addRemove(bBar[0], 'add', 'red-bbar');
    }

    if (counter == 33) {
        addRemove(allSects[3], 'add', 'display-none');
        addRemove(allSects[4], 'remove', 'display-none');
        addRemove(tBar[0], 'add', 'display-none');
        addRemove(bBar[0], 'add', 'display-none');
    }

}


function updateVars() {
    liveElem = document.querySelectorAll('.live');
    console.log(liveElem);
    var lisEven = liveElem[0];
    lisEven.addEventListener("click", interAct);
}


// Shorthand add and remove class function
function addRemove(x,y,z) {
    console.log(x,y,z);
    if (y == 'add'){ x.classList.add(z);} 
    else { x.classList.remove(z); }   
}
