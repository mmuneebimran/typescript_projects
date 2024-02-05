import inquirer from 'inquirer';
let conversion = {
    "PKR": {
        "USD": 0.004,
        "GDP": 0.0037,
        "PKR": 1
    },
    "USD": {
        "PKR": 225.50,
        "GDP": 0.83,
        "USD": 1
    },
    "GDP": {
        "USD": 1.21,
        "PKR": 271.79,
        "GDP": 1
    }
};
const response = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GDP"],
        message: "select your currency:"
    }, {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GDP"],
        message: "convert your currency to:"
    }, {
        type: "number",
        name: "amount",
        message: "enter amount:"
    }
]);
const { from, to, amount } = response;
if (from && to && amount) {
    let result = conversion[from][to] * amount;
    console.log("your amount", amount, "is converted from", from, "to", to, ":", result);
}
else {
    console.log("invalid input");
}
