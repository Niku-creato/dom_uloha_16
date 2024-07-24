const user = require('./user');

function greetUser(user) {
    console.log(`Доброго дня, ${user.firstName} ${user.lastName}`);
}

// Виклик функції
greetUser(user);

