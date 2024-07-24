const user = require('./user');

function printUserProperties(user) {
    for (let property in user) {
        console.log(`${property}: ${user[property]}`);
    }
}

// Виклик функції
printUserProperties(user);
