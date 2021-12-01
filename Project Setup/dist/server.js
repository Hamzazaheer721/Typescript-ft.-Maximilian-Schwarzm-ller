"use strict";
console.log("App is running!");
let button = document.querySelector("button");
// null error exists because typescript can't dive into your html and check if your button really does exist
// so to make sure you don't use that certainly doesn't exist, typescript asks you to tell it that yes it sure isn't null with !
// or you can disable the strict mode
// or you can disable strickNullChecks 
button.addEventListener("click", (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log("Button has been pressed");
    window.alert("Button has been pressed");
});
