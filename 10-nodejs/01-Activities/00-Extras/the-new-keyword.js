
// the keyword "new" in JavaScript is used to create "instances" of "objects"
// what the fung shui am I talking about?

// this is an object
var myObj = {
  hello: "world",
  sayHello: function () {
    console.log("hello");
  }
};

console.log('typeof myobj', typeof myObj);
// > "object"

/*
  When you declare a variable equal to {}, you are creating
  an *instance* of an object. This is called an "object literal".

  For example, here is an object literal of a cat named Sunshine
*/
var Sunshine = {
  name: "Sunshine",
  age: 6,
  coat: "orange/black/white",
  awesome: true
};

// Here is another object literal of a cat named Oreo
var Oreo = {
  name: "Oreo",
  age: 19,
  coat: "black/white",
  awesome: "meh"
};

// But if all cats have the same properties, "name", "age", "coat", "awesome",
// then wouldn't it be nice if there was some way to reduce the amount of code
// that we have to write? Well now, you can! For 3 easy payments of $19.99, the
// "new" keyword will be delivered to your doorstep in just 3 business days!

// In order to use the "new" keyword, you have to declare an "instantiator", or
// a "constructor" function.
function Cat () {
  console.log('Cat Constructor Function - Making a New Cat!');
}

// Now we can use our constructor function in combination with the new keyword to create a new cat!
var Sunshine = new Cat();
var Oreo = new Cat();

/*
  But what about all of the missing props, like "name", "age", etc?

  What if I told you that you could pass all of those values into your constructor function!?
*/
function Cat (name, age, coat, awesome) {

}

/*
  That's all great, but now what do I *do* with those properties?", you ask? Well, why we
  use the "this" keyword to assign them to each instance, you silly gooses (plural of goose)!
*/
function Cat (name, age, coat, awesome) {
  // 1. It's a single point of entry for creation of all objects of the same time

  // 2. You can do all your validation in one centralized location
  if (typeof coat !== 'string') {
    throw new Error('You must provide a coat color when creating a cat.');
  }

  // 3. You can use the this keyword to assign only specifically to this instance
  this.name = name;
  this.age = age;
  this.coat = coat;
  this.awesome = awesome;
}

function validateCatHasCoat (catObj) {
  if (typeof catObj.coat !== 'string') {
    throw new Error('You must provide a coat color when creating a cat.');
  }
}

function validateCatHasName (catObj) {
  if (typeof catObj.name !== 'string') {
    throw new Error('You must provide a name when creating a cat.');
  }
}

var Sunshine = {
  name: "Sunshine",
  age: 6,
  coat: "orange/black/white",
  awesome: true
};

validateCatHasCoat(Sunshine);
validateCatHasName(Sunshine);

var Sunshine = new Cat("Sunshine", 5, "orange/black/white", true);
var Oreo = new Cat("Oreo", 19, "black/white", "meh");
// We can now access this values using the "dot" (property accesor) operator
console.log(Sunshine.name);
console.log(Sunshine.age);
console.log(Sunshine.awesome);

// And you can create as many of these instances as you want!
var Cat3 = new Cat("Sir Catimus Aurelius the Thirdius", 20, "gold", "widly");
var Pawington = new Cat("Pawington Cuddlebottom", 3, "black/white", "so mucho");

// The two items in this array will actually be the same thing.
[
  {
    name: "Sunshine",
    age: 6,
    coat: "orange/black/white",
    awesome: true
  },
  new Cat("Sunshine", 5, "orange/black/white", true)
].forEach(function (cat) {
  // And this console.log will look the same for both of
  // these - both the object literal and constructed instance
  console.log(cat.name, cat.age, cat.coat, cat.awesome);
});
