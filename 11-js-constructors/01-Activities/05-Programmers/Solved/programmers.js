// constructor function used to create programmers objects
function Programmer(name, position, age, language) {
  this.name = name;
  this.position = position;
  this.age = age;

  // if you want to let instance.language bubble up to the prototype
  if (typeof language === 'string') {
    this.language = language;
  } else {
    // Let the prototype.language variable be used
  }
}

//  In Keith's class, we could:
Programmer.prototype.langauge = "JavaScript";

// creates the printInfo method and applies it to all programmer objects
Programmer.prototype.printInfo = function() {
  console.log("Name: " + this.name + "\nPosition: " + this.position +
  "\nAge: " + this.age + "\nLanguages: " + this.language);
};

// new programmer object is initialized to bob and is provided with the variables
// necessary to create all of the properties
var bob = new Programmer("Bob Smith", "Supreme CodeMaster", 33, "JavaScript");

// What if I omit the "new" keyword?
// var bob = Programmer("Bob Smith", "Supreme CodeMaster", 33, "JavaScript");
// answer: everything goes global! "this" = window

// calls the printInfo method for bob to print all of his information to the console
bob.printInfo();
