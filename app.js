
window.addEventListener("keydown", (e) =>{
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
const keys = document.querySelector(`.key[data-key="${e.keyCode}"]`)
keys.classList.add('playing')
audio.play();



setTimeout(() => {
    keys.classList.remove('playing')
    
}, 1000);

})