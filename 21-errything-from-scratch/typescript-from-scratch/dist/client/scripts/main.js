function sayGreeting(greeting) {
    console.log(greeting);
}
sayGreeting('hello');
sayGreeting(2);
var keithDetails = {
    name: "Keith",
    age: 21,
    favoriteColor: "clear"
};
var Person = /** @class */ (function () {
    function Person(details) {
        this.details = details;
    }
    return Person;
}());
window.addEventListener('DOMContentLoaded', function () {
    var josh = new Person({
        name: "Josh",
        age: 21,
        favoriteColor: "pink"
    });
    console.log('Hello, ' + josh.details.name);
});
//# sourceMappingURL=main.js.map