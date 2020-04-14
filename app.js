const fs = require("fs");
const axios = require("axios");
var inquirer = require("inquirer");

const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
    {
        type: "input",
        message: "What is your name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your id?",
        name: "id"
    },
    {
        type: "input",
        message: "What is your role?",
        name: "role"
    }
    ];

function promptUser(){
    return inquirer.prompt(questions);
}   

function generateHTML(answers) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Name: ${answers.name}</h1>
    <p class="lead">Email: ${answers.email}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">ID: ${answers.id}</li>
      <li class="list-group-item">Role: ${answers.role}</li>
    </ul>
  </div>


</div>
</body>
</html>`;
}

promptUser()
    .then(function (answers) {
        const html = generateHTML(answers);

        return writeFileAsync("index.html", html);
    })
    .then(function () {
        console.log("Successfully wrote to index.html");
    })
    .catch(function (err) {
        console.log(err);
    });
















