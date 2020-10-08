export class CoffeeMachine {
    constructor (coffee, water, milk) {
        this.coffee = coffee;
        this.water = water;
        this.milk = milk;
    }
  
    getEspresso() {
        if (this.coffee.amount > 10 && this.water.amount > 50) {
            this.coffee.amount -= 10;
            this.water.amount  -= 50;
            return console.log('Espresso done!'); 
        } else {
            console.log('Not enough ingredients!!!');
        }
    }

    getAmericano() {
        if (this.coffee.amount > 10 && this.water.amount > 100) {
            this.coffee.amount -= 10;
            this.water.amount  -= 100;
            return console.log('Americano done!');
        } else {
            console.log('Not enough ingredients!!!');
        }
    }

    getLatte() {
        if (this.coffee.amount > 10 && this.water.amount > 100 && this.milk.amount > 150) {
            this.coffee.amount -= 10;
            this.water.amount  -= 50;
            this.milk.amount   -= 150;
            return console.log('Latte done!');
        } else {
            console.log('Not enough ingredients!!!');
        }        
    }

    extraCoffee() {
        if (this.coffee.amount > 10) {
            this.coffee.amount -= 10;
            return console.log('extra coffee');
        } else {
            console.log('Not enough coffee!!!');
        }
    }

    extraWater() {
        if (this.water.amount > 50) {
            this.water.amount -= 50;
            return console.log('extra water');
        } else {
            console.log('Not enough water!!!');
        }
    }

    extraMilk() {
        if (this.milk.amount > 100) {
            this.milk.amount -= 100;
            return console.log('extra milk');
        } else {
            console.log('Not enough milk!!!');
        }
    }
}

