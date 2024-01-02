// import inqurer
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "number1",
        message: "please enter your first number:"
    },
    {
        type: "number",
        name: "number2",
        message: "please enter your second number:"
    },
    {
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
        message: "please select operator:"
    }
]);
const { number1, number2, operator } = answers;
if (number1 && number2 && operator) {
    let result = 0;
    if (operator === "addition") {
        result = number1 + number2;
    }
    else if (operator === "subtraction") {
        result = number1 - number2;
    }
    else if (operator === "multiplication") {
        result = number1 * number2;
    }
    else if (operator === "division") {
        result = number1 / number2;
    }
    console.log("your result is", result);
}
else {
    console.log("kindly enter valid input");
}
