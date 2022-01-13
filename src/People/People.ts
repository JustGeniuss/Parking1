import type {PeopleInterface} from '../Types'


export default class People implements PeopleInterface {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}