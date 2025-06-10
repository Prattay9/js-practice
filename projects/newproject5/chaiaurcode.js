const sayDate = function(str) {
    console.log(str, Date.now());
};



let invertId;

document.getElementById("start").addEventListener("click", function () {
        invertId = setInterval(sayDate, 1000, "hello world");
        console.log("started");
    
});
document.getElementById("stop").addEventListener("click", function () {
   
        clearInterval(invertId);
        console.log("stopped");
    
});


    