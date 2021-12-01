"use strict";
console.log("App is running!");
let button = document.querySelector("button");
// null error exists because typescript can't dive into your html and check if your button really does exist
// so to make sure you don't use that certainly doesn't exist, typescript asks you to tell it that yes it sure isn't null with !
// or you can disable the strict mode
// or you can disable strickNullChecks
// but if we have not made a button anywhere in html and we have also disabled strictNullCheck then it will cause runtimeError
// so its better not to meddle with strictNullCheck
// Solution: If you know that you used the button you could use the ! or you can wrap the whole actionListener in if statement and check if button is truthy
const handleChange = (params) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(`${params} Button has been pressed`);
    window.alert("Button has been pressed");
};
button.addEventListener("click", handleChange("Hey, Hamza!"));
//# sourceMappingURL=server.js.map