import { CoffeeMachine } from './CoffeeMachine';
import { Coffee } from './Coffee';
import { Water }  from './Water';
import { Milk }   from './Milk';

const coffeeMachine = new CoffeeMachine(new Coffee(1000), new Water(5000), new Milk(2000));

const espresso    = document.getElementById('espresso');
const americano   = document.getElementById('americano');
const latte       = document.getElementById('latte');
const extraCoffee = document.getElementById('extraCoffee');
const extraWater  = document.getElementById('extraWater');
const extraMilk   = document.getElementById('extraMilk');

espresso.addEventListener('click', () => {
    setTimeout( () => {
        return coffeeMachine.getEspresso();
    }, 2000);
});

americano.addEventListener('click', () => {
    setTimeout( () => {
        return coffeeMachine.getAmericano();
    }, 2000);
});

latte.addEventListener('click', () => {
    setTimeout( () => {
        return coffeeMachine.getLatte();
    }, 2000);
});

extraCoffee.addEventListener('click', () => {
    setTimeout( () => {
        return coffeeMachine.extraCoffee();
    }, 1000);
});

extraWater.addEventListener('click', () => {
    setTimeout( () => {
        return coffeeMachine.extraWater();
    }, 1000);
});

extraMilk.addEventListener('click', () => {
    setTimeout( () => {
        return coffeeMachine.extraMilk();
    }, 1000);
});






// console.log(coffeeMachine);
// coffeeMachine.getEspresso();
// coffeeMachine.getAmericano();
// coffeeMachine.getLatte();
// coffeeMachine.extraCoffee();
// coffeeMachine.extraWater();
// coffeeMachine.extraMilk();
// coffeeMachine.water.amount += 1000;
