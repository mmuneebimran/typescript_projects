import inquirer from 'inquirer';
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "number1",
        message: "Enter your first number :"
    },
    {
        type: "number",
        name: "number2",
        message: "Enter your last number :"
    },
    {
        type: "string",
        name: "operation",
        choice: ["add", "sub", "multiply", "divide"],
        message: "select your operator"
    }
]);
const { number1, number2, operation } = answers;
// console.log(answers)
if (number1 && number2 && operation) {
    let result = 0;
    if (operation === "add") {
        result = number1 + number2;
    }
    else if (operation === "sub") {
        result = number1 - number2;
    }
    else if (operation === "multiply") {
        result = number1 * number2;
    }
    else if (operation === "divide") {
        result = number1 / number2;
    }
    else {
        console.log("enter valid input");
    }
    console.log("your result is :", result);
}
