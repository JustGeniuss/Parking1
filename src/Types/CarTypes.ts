import type { PeopleInterface } from "./PeopleTypes";
import type { Gabarits } from "./gabarits";


export interface CarInterface extends Gabarits {
  /** часы на стоянке */
  hours: number;
  /** марка машины */
  brand: string;
  /** вместимость */
  capacity: number;
  /** выход всех людей из машины */
  stepOut: () => void;
  /** заход 1 человека в машину 
   * @param people человек
   * */
  stepIn: (people: PeopleInterface) => void;
  /** люди, сидящие в машин */
  peoples: PeopleInterface[];
}