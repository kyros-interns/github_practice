let btn = document.createEvent("button");
btn.innerHTML = "Change Color to Red";
btn.onclick = function() {
    document.body.style.backgroundColor = "red";
}