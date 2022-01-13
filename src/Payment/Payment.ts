import { PaymentInteraface, CarInterface, ParkingInterface } from "../Types";


export default class Payment implements PaymentInteraface {
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