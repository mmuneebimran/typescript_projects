import inquirer from "inquirer";
let genNUM = Math.floor(Math.random() * 2); //generating number 0 or 1
let user = await inquirer.prompt({
    name: "number",
    type: "list",
    message: "plz select number",
    choices: ["0", "1"]
});
if (genNUM == parseInt(user.number)) { //"parseInt" for string
    console.log("YOU WON");
}
else {
    console.log("TRY AGAIN");
}
