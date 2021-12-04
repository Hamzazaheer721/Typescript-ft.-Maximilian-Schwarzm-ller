// typescript knows the specific type of element when you get an element by querySelector
//Typescript knows that the type of paragraph variable is HTMLParagraphElement | null
// const paragraph = document.querySelector("p") 

// Step 2

// In following case typescript doesn't know the exact type of paragraph, it only knows it is HTMLElement | null
const paragraph = document.getElementById("greetings_paragraph")

// why its type rn is null ? thats because typescript doesn't know what exists in your html file
