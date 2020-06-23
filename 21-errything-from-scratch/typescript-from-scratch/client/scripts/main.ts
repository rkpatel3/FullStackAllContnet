interface PersonDetails {
    name: string;
    age: number;
    favoriteColor: string;
    glasses?: boolean;
}

function sayGreeting (greeting: string) {
    console.log(greeting);
}

const keithDetails: PersonDetails = {
    name: "Keith",
    age: 21,
    favoriteColor: "clear"
};

class Person {
    constructor (details: PersonDetails) {
        this.details = details;
    }

    // instance member (public)
    details: PersonDetails;
}

window.addEventListener('DOMContentLoaded', () => {
    sayGreeting('hello');

    var josh = new Person({
        name: "Josh",
        age: 21,
        favoriteColor: "pink"
    });
    console.log('Hello, ' + josh.details.name);
});
