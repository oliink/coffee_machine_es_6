import { Coffee } from './Coffee';
import { Water }  from './Water';
import { Milk }   from './Milk';
import { CoffeeMachine } from './CoffeeMachine';

let coffeeMachine = new CoffeeMachine(new Coffee(1000), new Water(5000), new Milk(2000));

coffeeMachine.getEspresso();
coffeeMachine.getAmericano();
coffeeMachine.getLatte();
coffeeMachine.extraCoffee();
coffeeMachine.extraWater();
coffeeMachine.extraMilk();
coffeeMachine.water.amount = 2000;

console.log(coffeeMachine);


// let espresso = document.getElementById('espresso');
// espresso.addEventListener( 'click', coffeeMachine.getEspresso);

