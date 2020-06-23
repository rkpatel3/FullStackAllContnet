var calculateTax = function(price) {
  if (typeof price !== 'number') {
    throw new Error('Price must be a number');
  }

  // Fill in code here
  var priceWithTax = price * 1.08;
  return priceWithTax.toFixed(2);
  // return "1.02"
};

module.exports = calculateTax;

// function doSomething(arg1, callback) {
//   callback({
//     name: arg1
//   });
// }

// function createDivs (arrData) {
//   arrData.forEach(function (number) {
//     $('body').appendChild('<div>' + number + '</div>');
//   })
// }

// function testDivsCreated () {
//   var testData = [1, 2, 3];
//   createDivs(testData);
//   expect($('body div').length()).to.equal(testData.length);
// }

// function createArrayOfNumbers (howMany) {
//   var arrNumbers = [];
//   while (howMany--) {
//     arrNumbers.push(howMany);
//   }
//   return arrNumbers;
// }

// expect(createArrayOfNumbers(100).length).to.equal(100);
// expect(createArrayOfNumbers(19).length).to.equal(19);
