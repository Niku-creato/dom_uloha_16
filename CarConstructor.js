function Car(color, model, make, engineVolume, capacity, maxSpeed) {
    this.color = color;
    this.model = model;
    this.make = make;
    this.engineVolume = engineVolume;
    this.capacity = capacity;
    this.speed = 0;
    this.maxSpeed = maxSpeed;

    this.accelerate = function(amount) {
        this.speed = Math.min(this.speed + amount, this.maxSpeed);
        console.log(`Поточна швидкість: ${this.speed} км/год`);
    };

    this.deaccelerate = function(amount) {
        this.speed = Math.max(this.speed - amount, 0);
        console.log(`Поточна швидкість: ${this.speed} км/год`);
    };

    this.stop = function() {
        this.speed = 0;
        console.log(`Поточна швидкість: ${this.speed} км/год`);
    };
}

// Створення екземплярів
const car1 = new Car("синій", "Model X", "Tesla", 100, 7, 210);
const car2 = new Car("зелений", "Civic", "Honda", 1.8, 5, 220);

// Використання методів
car1.accelerate(50);
car2.accelerate(70);
car1.deaccelerate(20);
car2.stop();

module.exports = Car;
