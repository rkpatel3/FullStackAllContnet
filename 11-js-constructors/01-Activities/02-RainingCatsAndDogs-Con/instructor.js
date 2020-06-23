function createAnimal (noise) {
  return {
    noise: noise
  }
}

function Animal (noise) {
  this.noise = noise;
}

var dogs = createAnimal('woof');
var cats = new Animal('meow');

dogs
// {noise: "woof"}noise: "woof"__proto__: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()

cats
// Animal {noise: "meow"}noise: "meow"__proto__: Objectconstructor: ƒ Animal(noise)arguments: nullcaller: nulllength: 1name: "Animal"prototype: {constructor: ƒ}__proto__: ƒ ()[[FunctionLocation]]: VM267:7[[Scopes]]: Scopes[1]__proto__: Object

typeof cats
// "object"

typeof dogs
// "object"

dogs instanceof Animal
// false

cats instanceof Animal
// true

var animals = [
  cats,
  dogs
];

animals.forEach(function (animal) {
  console.log(animal.noise);
});

// meow
// woof

var animals = [
  cats,
  dogs
];

animals.forEach(function (animal) {
  if (animal instanceof Animal) {
    console.log(animal.noise);
  }
});

// meow
