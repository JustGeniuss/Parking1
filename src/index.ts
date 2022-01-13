// let a = 1 + 2
// let b = a + 3
// let c =
// {
//  apple: a,
//  banana: b
// }
// let d = c.apple * 4
// console.log(d);

// import { generateKey } from "crypto";

// class Say {
//   constructor(
//     public phrase: string
//   ) {}
// }

// let s = new Say('Say Hi!')
// console.log(s.phrase);

// class Krug {
//   public square: number
//   constructor(
//     public radius: number

//   ) {
//       this.square = this.radius * 3.14

//   }
// }

// let s = new Krug(7);
// console.log(s.square);

// class Paral {
//   public square: number
//   constructor(
//     public length: number,
//     public short: number,
//     public tall: number
//   ) {
//     this.square = this.length * this.short * this.tall
//   }
// }
// let p = new Paral(3, 4, 5);
// console.log(p.square)

// class Counter {
//   private count: number = 0
//   constructor(count?: number) {
//     if (count !== undefined) {this.count = count}
//   }

//   public increase(): void {
//     this.count = this.count + 1;
//   }

//   public decrease(): void {
//     this.count = this.count - 1;
//   }
//   public getCount(): number {
//     return this.count;
//   }
// }

// let c = new Counter(3);
// c.increase();
// c.increase();
// c.increase();
// c.decrease();
// console.log(c.getCount());

// class PrimeAnimal {
//   constructor(public weight: number, private coef: number) {}
//   public countFood() {
//     return this.weight * this.coef;
//   }
// }
// let a = new PrimeAnimal(70, 2);
// console.log(a.countFood());

// class Predator extends PrimeAnimal {
//   public coefPredator: number = 2;
//   constructor(public weight: number) {
//     super(weight)
//      this.coef = this.coefPredator
//   }
//   public countFood() {
//     return this.weight * this.coefPredator;
//   }aaa
// }

// let h = new Predator(70);
// console.log(h.countFood());

// let arr: (number | string)[] = [1, 2, 3, 4, '12'];

// type f = { (x: number, y: number): void
// (x: number, y: string): void };

// let cons: f = (x, y) => {
//   console.log(1312);
// };

// cons(0, 3);

// let cons2: f = (x, y) => {
//   console.log(1312);
// };

// cons2(0, "sa");

// const keys = ['string', 'string2']

// interface a {
//   [key: typeof keys]: string;

// }

// let obj3: a = {
//   string: "string",
//   string2: "string",
//   string3: "string",
//   string4: "string",
// };

// function a(): never {
//   while(true) {}

// }

// a();

// type hui<ЖОПА>=ЖОПА | string;

// const a: hui<number> = 687;

// interface Cash {
//   [key: string]: number;
// }
// interface HasCash {
//   cash: Cash;
// }
// class Bankomat implements HasCash {
//   constructor() {}
//   cash : Cash = {
//     5000: 4,
//     2000: 6,
//     1000: 9,
//     500: 8,
//     200: 2,
//     100: 5,
//   };
//   public cashIn(a: number) {

//     let c = Object.entries(this.cash)
//       .sort((a, b) => {
//         return +b[0] - +a[0];
//       })
//       .map((value) => {
//         let c = Math.floor(a / +value[0]);
//         a = a - c * +value[0];
//         value[1] = value[1] + c;

//         return value;
//       });
//       let obj: Cash = Object.fromEntries(c);

//     this.cash = {...obj}
//     return this.cash
//   }
//   public cashOut(a: number) {

//     let c = Object.entries(this.cash)
//         .sort((a, b) => {
//           return +b[0] - +a[0];
//         })
//         .map((value) => {
//           let c: number = Math.floor(a / +value[0]);
//           a = a - c * +value[0];
//           value[1] = value[1] - c;

//           return value;
//         })

//         let obj: Cash = Object.fromEntries(c);

//     this.cash = {...obj}
//     return this.cash

//   }
// }

// let bankomat = new Bankomat();
// console.log(bankomat.cashIn(3000));
// console.log(bankomat.cashOut(100));
// console.log(bankomat.cash);
// class ClientCash implements HasCash {

//   constructor() {}
//   cash = {
//     5000: 0,
//     2000:1,
//     1000:4,
//     500:0,
//     200:0,
//     100:2
//   }
// }

// interface ClockInterface {
//   hours: number;
//   minutes: number;
//   tick: () => string;
// }

// interface ConstructorInterface {
//   new (hours: number, minutes: number): Clock;
// }

//   abstract class Clock implements ClockInterface {
//   hours: number;
//   minutes: number = 10;
//   constructor(hours: number, minutes: number) {
//     (this.hours = hours), (this.minutes = minutes);
//   }
//   abstract tick(): string
//   static createClock(
//     clock: ConstructorInterface,
//     hours: number,
//     minutes: number
//   ): ClockInterface {
//     return new clock(hours, minutes);
//   }
// }

// class DigitalClock extends Clock {
//   public tick(): string {
//     return "beep beep";
//   }
// }

// class AnalogClock extends Clock {
//   public tick(): string {
//     return "tick tock";
//   }
// }

// let a = Clock.createClock(DigitalClock, 3, 14);
// let b = Clock.createClock(AnalogClock, 4, 24);
// console.log(a);
// console.log(a.tick(), b.tick());

// объект машины, парковки, счет
interface PeopleInterface {
  name: string;
}

class People implements PeopleInterface {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

interface CarInterface {
  hours: number;
  length: number;
  width: number;
  brand: string;
  capacity: number;
  area: number;
  stepOut: () => void;
  stepIn: (people: PeopleInterface) => void;
  peoples: PeopleInterface[];
}

class Car implements CarInterface {
  hours;
  length;
  width;
  brand;
  capacity;
  peoples: PeopleInterface[] = [];
  area: number = 0;
  constructor(
    hours: number,
    length: number,
    width: number,
    brand: string,
    capacity: number
  ) {
    this.hours = hours;
    this.length = length;
    this.width = width;
    this.brand = brand;
    this.capacity = capacity;
    this.area = this.length * this.width;
  }

  /**
   * Усаживаем =>
   * @param people Человек
   */
  public stepIn(people: PeopleInterface): void {
    if (this.peoples.length < this.capacity) {
      this.peoples.push(people);
    } else {
      console.log("Места уже нет!");
    }
  }
  public stepOut(): void {
    this.peoples = [];
  }
}
let car = new Car(1, 3, 2, "Mazda", 4);
let car2 = new Car(1, 4, 4, "Mazda", 4);

let people = new People("СЕРЁГА");
let people2 = new People("Марина");
console.log(car.area);
car.stepIn(people2);
car.stepIn(people);
console.log(car.peoples);
car.stepOut();
console.log(car.peoples);

interface ParkingInterface {
  length: number;
  width: number;
  area: number;
  percentOfArea: number;
  comeIn: (car: CarInterface) => void;
  comeOut: (car: CarInterface) => void;
}

class Parking implements ParkingInterface {
  length;
  width;
  area;
  percentOfArea: number = 0;
  constructor(length: number, width: number) {
    this.length = length;
    this.width = width;
    this.area = this.length * this.width;
  }
  public comeIn(car: CarInterface): void {
    this.percentOfArea = this.percentOfArea + (car.area / this.area) * 100;
  }
  public comeOut(car: CarInterface): void {
    this.percentOfArea = this.percentOfArea - (car.area / this.area) * 100;
  }
}

let parking = new Parking(10, 20);
parking.comeIn(car);
// parking.comeIn(car2);
parking.comeOut(car);
console.log(parking.percentOfArea);

interface PaymentInteraface {
  priceForOnePercentInHour: number;
  cost: number;
  discount: number;
}

class Payment implements PaymentInteraface {
  priceForOnePercentInHour: number;
  cost: number = 0;
  discount: number;
  constructor(priceForOnePercentInHour: number, discount: number) {
    this.priceForOnePercentInHour = priceForOnePercentInHour;
    this.discount = discount;
  }
  public countCost(car : CarInterface, parking : ParkingInterface): void {
    this.cost = (car.area * car.hours) * (parking.percentOfArea+1) / this.discount
  }
}
 let payment  = new Payment(10, 10)
 payment.countCost(car, parking);
 console.log(payment.cost)