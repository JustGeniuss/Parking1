import { CarInterface, ParkingInterface } from "../Types";


export default class Parking implements ParkingInterface {
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