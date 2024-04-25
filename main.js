#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    //          ---------- option------------
    let option = await inquirer.prompt([{
            name: "userOption",
            type: "list",
            message: "select your option",
            choices: ["add task",
                "delete task"
            ]
        }]);
    //          ---------- add------------
    if (option.userOption === "add task") {
        let ans = await inquirer.prompt([{
                name: "user_ans",
                type: "input",
                message: "write something to add in your task list."
            }]);
        if (ans.user_ans !== '') {
            todos.push(ans.user_ans);
            console.log(todos);
        }
        else {
            console.log("please write something to your todo list");
        }
    }
    //          ----------delete ------------
    else if (option.userOption === "delete task") {
        let deleteTask = await inquirer.prompt([{
                type: "list",
                name: "delete_option",
                message: " select item to delete...",
                choices: todos
            }]);
        let index_to_delete = todos.indexOf(deleteTask.delete_option);
        if (index_to_delete >= 0) {
            todos.splice(index_to_delete, 1);
            console.log("you removed : ", deleteTask.delete_option);
            console.log(todos);
        }
    }
    //          ----------exit ------------
    let confirmation = await inquirer.prompt([{
            name: "exit",
            type: "confirm",
            message: "do you want to continue?",
            default: true
        }]);
    if (confirmation.exit === false) {
        condition = false;
    }
}
console.log("thank you for using to do app");
// {
//     let todosQuestions = await inquirer.prompt(
//     [
//         {
//          name:"firstQuestion",
//          type:"input",
//          message:"what would you like to add in your todos?"
//         },
//         {
//          name:"secondQuestion",
//          type:"confirm",
//          message:"would you like to add more in your todos?",
//          default:"true"
//         }
//     ]);
//   todos.push(todosQuestions.firstQuestion);
//   console.log(todos);
//   condition = todosQuestions.secondQuestion;
// }
