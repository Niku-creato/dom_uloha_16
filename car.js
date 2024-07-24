const car = {
    color: "червоний",
    model: "Model S",
    make: "Tesla",
    engineVolume: 85, // в кВт·год
    capacity: 5,
    speed: 0,
    maxSpeed: 250,
    
    accelerate: function(amount) {
        this.speed = Math.min(this.speed + amount, this.maxSpeed);
        console.log(`Поточна швидкість: ${this.speed} км/год`);
    },
    
    deaccelerate: function(amount) {
        this.speed = Math.max(this.speed - amount, 0);
        console.log(`Поточна швидкість: ${this.speed} км/год`);
    },
    
    stop: function() {
        this.speed = 0;
        console.log(`Поточна швидкість: ${this.speed} км/год`);
    }
};

// Використання методів
car.accelerate(100);
car.deaccelerate(30);
car.stop();

module.exports = car;
