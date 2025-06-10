const cloclk = document.querySelector('.clock');
let date = new Date();
setInterval(function() {
    let date = new Date();
    
    clock.innerHTML = date.toLocaleTimeString()

    
}, 1000);