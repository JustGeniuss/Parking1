import People from "./People/People";
import Car from "./Car/Car";
import Parking from "./Parking/Parking";
import Payment from "./Payment/Payment";

let car = new Car(1, 3, 2, "Mazda", 4);
let car2 = new Car(1, 4, 4, "Mazda", 4);

console.log(car.area);
car.stepIn(new People("СЕРЁГА"));
car.stepIn(new People("Марина"));
console.log(car.peoples);
car.stepOut();
console.log(car.peoples);

let parking = new Parking(10, 20);
parking.comeIn(car);
parking.comeIn(car2);
parking.comeOut(car);
console.log(parking.percentOfArea);

let payment = new Payment(10, 10);
payment.countCost(car, parking);
console.log(payment.cost);
