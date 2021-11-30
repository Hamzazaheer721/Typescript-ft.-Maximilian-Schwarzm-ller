var button = document.querySelector("button");
var number1 = document.getElementById("input1");
var number2 = document.getElementById("input2");
var sum = function (num1, num2) {
    return num1 + num2;
};
if (button) {
    button.addEventListener("click", function (e) {
        e.preventDefault();
        console.info("Sum: ", sum(+number1.value, +number2.value));
    });
}
