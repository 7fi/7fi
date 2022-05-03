const modeToggle = document.getElementById('modeToggle');
let lightMode = false;


// Toggle between light and dark mode
modeToggle.addEventListener('click', () => {
    if(!lightMode){
        modeToggle.children[0].classList.replace('gg-sun','gg-moon');
        document.documentElement.style.setProperty('--dark','#eaeaea');
        document.documentElement.style.setProperty('--medDark','#fff');
        document.documentElement.style.setProperty('--med','#cfcfcf');
        document.documentElement.style.setProperty('--medLight','#d1d1d1');
        document.documentElement.style.setProperty('--light','#b3b3b3');
        document.documentElement.style.setProperty('--highlight','#000');
        document.documentElement.style.setProperty('--highlight1','#12A5B1');
    }else{
        modeToggle.children[0].classList.replace('gg-moon','gg-sun');
        document.documentElement.style.setProperty('--dark','#333');
        document.documentElement.style.setProperty('--medDark','#444');
        document.documentElement.style.setProperty('--med','#555');
        document.documentElement.style.setProperty('--medLight','#666');
        document.documentElement.style.setProperty('--light','#777');
        document.documentElement.style.setProperty('--highlight','#fff');
        document.documentElement.style.setProperty('--highlight1','#222');
    }
    lightMode = !lightMode;
})