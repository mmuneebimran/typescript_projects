import inquirer from 'inquirer';
const counter = (paragraph) => paragraph.replace(/\s/g, "").length;
async function wordcounter(counter) {
    do {
        let res = await inquirer.prompt({
            type: "input",
            message: "write paragraph here: ",
            name: "paragraph"
        });
        console.log(counter(res.paragraph));
    } while (true);
}
wordcounter(counter);

