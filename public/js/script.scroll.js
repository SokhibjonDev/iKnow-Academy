window.addEventListener(
    "scroll",
    function () {
        if (window.scrollY > 80) {
            document.querySelector("nav").style.background = "#fff";
            document.querySelector("nav").style.boxShadow = "0 0 7px 1px #2c2c2c";

        } else {
            document.querySelector("nav").style.background = "#fff";
            document.querySelector("nav").style.boxShadow = "none";
            document.querySelector("nav").style.transition = ".2s";
        }
    }
);
window.addEventListener(
    "scroll",
    function () {
        if (window.scrollY > 480) {
            document.querySelector(".fst-half").style.opacity = "1";

        } else {
            document.querySelector(".fst-half").style.opacity = "0";
            document.querySelector(".fst-half").style.transition = "1.3s";
        }
    }
);