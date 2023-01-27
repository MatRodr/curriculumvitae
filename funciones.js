
document.getElementById("btn1").addEventListener("click", function() {
    document.getElementById("demo").style.display = "block"
    document.getElementById("demo1").style.display = "none"
    document.getElementById("demo2").style.display = "none"
    document.getElementById("demo3").style.display = "none"
});

document.getElementById("btn2").addEventListener("click", function() {
    document.getElementById("demo").style.display = "none"
    document.getElementById("demo1").style.display = "none"
    document.getElementById("demo2").style.display = "block"
    document.getElementById("demo3").style.display = "none"
});

document.getElementById("btn3").addEventListener("click", function() {
    document.getElementById("demo").style.display = "none"
    document.getElementById("demo1").style.display = "none"
    document.getElementById("demo2").style.display = "none"
    document.getElementById("demo3").style.display = "block"
});