function formatOutput (num) {
  var divisibleByThree = (num % 3 === 0);
  var divisibleByFive = (num % 5 === 0);

  if (divisibleByThree && divisibleByFive) {
    console.log('FizzBuzz');
  } else if (divisibleByThree) {
    console.log('Fizz');
  } else if (divisibleByFive) {
    console.log('Buzz');
  }
}

for (var i = 1; i <= 100; i++) {
  formatOutput(i);
}