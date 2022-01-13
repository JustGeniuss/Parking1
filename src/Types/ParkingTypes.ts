import { CarInterface } from "./CarTypes";
import type { Gabarits } from "./GabaritsTypes";


export interface ParkingInterface extends Gabarits {
  /** Занятый процент от площади парковки */
  percentOfArea: number;
  /** Машина заезжает на парковку */
  comeIn: (car: CarInterface) => void;
  /** Машина выезжает с парковки */
  comeOut: (car: CarInterface) => void;
}