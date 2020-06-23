var expect = require("chai").expect;
var calculateTax = require("../tax");

// expect(1).to.equal(1);
// Write tests for the calculateTax function here
describe('calculateTax Test Suite', function () {
    // blue sky scenario
    it('should format result like US dollars', function (done) {
        setTimeout(function () {
            expect(calculateTax(100)).to.equal("shennanigans");
            done();
        }, 1000);
    });

    it('should have a return type of string', function () {
        expect(typeof calculateTax(100)).to.equal("string");
    });

    it('should throw when invalid input type passed', function () {
        expect(function () {
            calculateTax("$100.00");
        }).to.throw(Error); // , 'Argument "price" must be of type "number".');
    })
});
