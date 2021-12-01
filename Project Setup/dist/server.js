"use strict";
console.log("App is running!");
let button = document.querySelector("button");
button.addEventListener("click", (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log("Button has been pressed");
    window.alert("Button has been pressed");
});
