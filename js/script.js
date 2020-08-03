let first = (localStorage.getItem("first") === null) ? true : localStorage.getItem("first");
if (first == true) {
    setTimeout(() => {
        if (first) {
            window.onload = whenOnload();
            localStorage.setItem('first', 'false');
        }
    }, 5300);
}
else {
    whenOnload();
}
function whenOnload() {
    console.log("Loaded");
    document.querySelector(".preload-cont").style.display = "none";
    document.querySelector("body").style.overflow = "visible";
}
