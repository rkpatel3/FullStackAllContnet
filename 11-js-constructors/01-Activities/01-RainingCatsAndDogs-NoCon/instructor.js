function makeNoise () {
  // this = window, unless it's parent is an object
  if (this.raining) {
    console.log(this.noise);
  }
}

// calling makeNoise this way will look for window.raining, window.noise
makeNoise();

var dogs = {
  raining: true,
  noise: "Woof!",
  makeNoise: makeNoise
};

var cats = {
  raining: false,
  noise: "Meow!",
  makeNoise: makeNoise
};

var pig = {
  raining: false,
  flying: true,
  makeNoise: function () {
    console.log('Oink!');
  }
};

dogs.makeNoise();

// set it to the opposite of whatever it is
// note: cats.makeNoise() won't do anything is cats.raining = false.
cats.raining = !cats.raining;
cats.makeNoise();

function massHysteria (arrAnimals) {
  if (arrAnimals && arrAnimals.length) {
    // get me all animals that are raining = true
    var rainingAnimals = arrAnimals.filter(function (animal) {
      return animal.raining === true;
    });

    if (rainingAnimals.length === arrAnimals.length) {
      console.log('DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!');
    }
  }
}

// cats.raining = true now
cats.raining = !cats.raining;
massHysteria([
  cats,
  dogs
]);

// A function that creates an object, based on values passed in
function createAnimal (raining, noise) {
  if (typeof noise !== 'string') {
    console.log('Brosef, u have to pass a noise. Duh');
  }

  return {
    raining: raining,
    noise: noise,
    // makeNoise function is in same scope as createAnimal
    makeNoise: makeNoise
  };
}

var dogs2 = createAnimal(true, "Woof!");
var cats2 = createAnimal(false, "Meow!");
var pigs2 = createAnimal(false, "Oink!");
