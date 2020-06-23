// dependency for inquirer npm package
var inquirer = require("inquirer");

// constructor function used to create programmers objects
function Programmer(name, position, age, language) {
  this.name = name;
  this.position = position;
  // ternary operator
  // condition ? true : false
  // 1 === 1 ? console.log('DUH') : console.log('JS math is messed up :o')
  this.age = (typeof age === "string" ? parseInt(age) : age);
  this.language = language;
}

// creates the printInfo method and applies it to all programmer objects
Programmer.prototype.printInfo = function() {
  console.log("Name: " + this.name + "\nPosition: " + this.position + "\nAge: " +
  this.age + "\nLanguages: " + this.language);
};

// runs inquirer and asks the user a series of questions whose replies are
// stored within the variable answers inside of the .then statement.
inquirer.prompt([
  {
    name: "name",
    message: "What is your name?"
  }, {
    name: "position",
    message: "What is your current position?"
  }, {
    name: "age",
    message: "How old are you?"
  }, {
    name: "language",
    message: "What is your favorite programming language?"
  }
]).then(function(answers) {
  /*
  answers = {
    name: "",
    position: "",
    age: "",
    language: ""
  }
  */
  // initializes the variable newProgrammer to be a programmer object which will take
  // in all of the user's answers to the questions above

  // WHY!!!!????
  // why use a constructor? constructor is:
  // - a single point of entry where you can perform data validation, "massaging the data"
  // - answers object, when console.logged, is "f Object()" whereas newProgrammer, when console.logged, is "f Programmer()".
  //   meaning, we can use "instanceof" to determine whether or not newProgrammer is an instance of Programmer
  // - all of the methods defined by the Programmer object are available to newProgrammer, but not to the "answers" object

  var newProgrammer = new Programmer(answers.name, answers.position, answers.age, answers.language);
  /*
  newProgrammer = {
    name: "",
    position: "",
    age: "",
    language: ""
  }
  */

  console.log('newProgrammer - Is it a programmer?', newProgrammer instanceof Programmer);
  // > true
  console.log('answers - Is it a programmer?', answers instanceof Programmer);
  // > false
  // therefore we can't call answers.printInfo(); (duh ?)

  // printInfo method is run to show that the newProgrammer object was successfully created and filled
  newProgrammer.printInfo();
});
