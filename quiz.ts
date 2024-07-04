#! /usr/bin/env node
import inquirer from "inquirer"
import Choice from "inquirer/lib/objects/choice.js";
import chalk from "chalk";
console.log(chalk.yellow.bold("==>-------Lets's  Solve  This  QUIZ -------<=="));
const input1 = await inquirer.prompt([{
    type:"list",
    name:"userAnswer",
    message: chalk.green.bold("What is the capital of Pakistan?"),
     choices:["Karachi","Islamabad","Lahore","Peshawar"]
     }]);
function quiz(question:string, answer:string){
    if(input1.userAnswer === answer){
         console.log("Correct!");
    } else {
        console.log("wrong answer");
    }
}
quiz("What is the capital of Paistan?","Islamabad");

let input2= await inquirer.prompt([{
    type:"list",
    name:"userAnswer",
    message: chalk.green.bold("Which is the biggest city of Pakistan?"),
    choices:["Lahore","Quetta","Karachi","Islamabad"]
}]);
function quiz2(question:string, answer:string){
    if(input2.userAnswer === answer){
        console.log("Correct!");
    } else {
        console.log("wrong answer");
    }
};
quiz2("Which is the biggest city of Pakistan?","Karachi");

let input3= await inquirer.prompt([{
    type:"list",
    name:"userAnswer",
    message: chalk.green.bold("How many countries are in the world?"),
    choices:["165","205","195","190"]
}]);
function quiz3(question:string, answer:string){
    if(input3.userAnswer === answer){
        console.log("Correct!");
    } else {
        console.log("wrong answer");
    }
};
quiz3("How many countries are in the world?","195");

const input4= await inquirer.prompt([{
    type:"list",
    name:"userAnswer",
    message: chalk.green.bold("Who is the founder of Pakistan?"),
     choices:["Allama Iqbal","Quaid-e-Azam","Liaquat Ali Khan","Muhammad Ali Johar"]}
]);
function quiz4(question:string, answer:string){
    if(input4.userAnswer === answer){
        console.log("Correct!");
    } else {
        console.log("wrong answer");
    }
}
quiz4("Who is the founder of Paistan?","Quaid-e-Azam");

const input5= await inquirer.prompt([{
    type:"list",
    name:"userAnswer",
    message:chalk.green.bold( "What is the most popular programming language in the world?"),
    choices:["Python","Java","C++","Javascript"]}
]);
function quiz5(question:string, answer:string){
    if(input5.userAnswer === answer){
        console.log("Correct!");
    } else {
        console.log("wrong answer");
    }
}
quiz5("What is the most popular language in the world?","Python");


const input6= await inquirer.prompt([{
    type:"list",
    name:"userAnswer",
    message: chalk.green.bold("which country has the most islands in the world?"),
    choices:["Sweden","Finland","Indonesia","philippines"]
}]);
function quiz6(question:string, answer:string){
    if(input6.userAnswer === answer){
        console.log("Correct!");
    } else {
        console.log("wrong answer");
    }
}
quiz6("which country has the most islands in the world?","Indonesia");

const input7= await inquirer.prompt([{
    type:"list",
    name:"userAnswer",
    message:chalk.green.bold("Which company developed the first smartphone?"),
    choices:["Apple","Google","Nokia","IBM"]
}]);
function quiz7(question:string, answer:string){
    if(input7.userAnswer === answer){
        console.log("Correct!");
    } else {
        console.log("wrong answer");
    }
}
quiz7("Which company developed the first smartphone?","IBM");


const input8= await inquirer.prompt([{
    type:"list",
    name:"userAnswer",
    message: chalk.green.bold("What is the largest planet in our solar system?"),
    choices:["Jupiter","Uranus","Earth","Saturn"]
}]);
function quiz8(question:string, answer:string){
    if(input8.userAnswer === answer){
        console.log("Correct!");
    } else {
        console.log("wrong answer");
    }
}
quiz8("What is the largest planet in our solar system?","Jupiter");

const input9=await inquirer.prompt([{
    type:"list",
    name:"userAnswer",
    message: chalk.green.bold("Which planet is known as the RED planet?"),
    choices:["Jupiter","Mars","Earth","Saturn"]
}]);
function quiz9(question:string, answer:string){
    if(input9.userAnswer === answer){
        console.log("Correct!");
    } else {
        console.log("wrong answer");
    }
}
quiz9("Which planet is known as the RED planet?","Mars");

const input10= await inquirer.prompt([{
    type:"list",
    name:"userAnswer",
    message: chalk.green.bold("How many continent are in the world?"),
    choices:["6","8","5","7"]
}]);
function quiz10(question:string, answer:string){
    if(input10.userAnswer === answer){
        console.log("Correct!");
    } else {
        console.log("wrong answer");
    }
}
quiz10("How many continents are in the world?","7");






















