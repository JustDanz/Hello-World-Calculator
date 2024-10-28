const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
    display.focus();
    if (btnValue === "=") {
        // Set output to "Hello World" when "=" is pressed
        output = "Hello World";
    } else if (btnValue === "ac") {
        output = "";
    } else if (btnValue === "del") {
        output = output.toString().slice(0, -1);
    } else {
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
