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
            return alert('Espresso done!'); 
        } else {
            alert('Not enough ingredients!!!');
        }
    }

    getAmericano() {
        if (this.coffee.amount > 10 && this.water.amount > 100) {
            this.coffee.amount -= 10;
            this.water.amount  -= 100;
            return alert('Americano done!');
        } else {
            alert('Not enough ingredients!!!');
        }
    }

    getLatte() {
        if (this.coffee.amount > 10 && this.water.amount > 100 && this.milk.amount > 150) {
            this.coffee.amount -= 10;
            this.water.amount  -= 50;
            this.milk.amount   -= 150;
            return alert('Latte done!');
        } else {
            alert('Not enough ingredients!!!');
        }        
    }

    extraCoffee() {
        if (this.coffee.amount > 10) {
            this.coffee.amount -= 10;
            return alert('extra coffee');
        } else {
            alert('Not enough coffee!!!');
        }
    }

    extraWater() {
        if (this.water.amount > 50) {
            this.water.amount -= 50;
            return alert('extra water');
        } else {
            alert('Not enough water!!!');
        }
    }

    extraMilk() {
        if (this.milk.amount > 100) {
            this.milk.amount -= 100;
            return alert('extra milk');
        } else {
            alert('Not enough milk!!!');
        }
    }
}

