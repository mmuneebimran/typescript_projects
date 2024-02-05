import inquirer from 'inquirer';
import { faker } from '@faker-js/faker';
const createUser = () => {
    let users = [];
    for (let i = 0; i < 5; i++) {
        let user = {
            id: i,
            name: faker.internet.userName(),
            accountNumber: 100 + i,
            balance: Math.floor(10000 * Math.random() * 200000)
        };
        users.push(user);
    }
    return users;
};
//atm machine
const atmMachine = async (users) => {
    const response = await inquirer.prompt({
        type: "number",
        message: "enter your id",
        name: "id",
    });
    const user = users.find((val) => val.id == response.id);
    if (user) {
        console.log("welcome", user.name);
        atmFunc(users);
        return;
    }
    else {
        console.log("invalid user");
    }
};
//atm function
const atmFunc = async (users) => {
    const response = await inquirer.prompt({
        type: "list",
        name: "select",
        choices: ["withdraw", "exit", "deposit", "balance"],
    });
    if (response.select == "withdraw") {
        const amount = await inquirer.prompt({
            type: "number",
            message: "enter amount",
            name: "rupee"
        });
        if (amount.rupee > users.balance) {
            return console.log("insufficient balance");
        }
        console.log("withdraw amount", amount.rupee);
        console.log("remaining balance", users.balance - amount.rupee);
    }
    if (response.select == "deposit") {
        const deposit = await inquirer.prompt({
            type: "number",
            message: "enter amount to be deposited",
            name: "rupee"
        });
        console.log("deposited amount:", deposit.rupee);
        console.log("remaining balance:", users.balance + deposit.rupee);
    }
    if (response.select == "balance") {
        console.log("balance:", users.balance);
    }
    if (response.select == "exit") {
        console.log("thanks for using atm");
    }
};
const users = createUser();
atmMachine(users);
console.log(users);
