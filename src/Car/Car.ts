import { CarInterface, PeopleInterface } from "../Types";


export default class Car implements CarInterface {
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