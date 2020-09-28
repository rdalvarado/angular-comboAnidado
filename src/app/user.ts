import { Country } from "./country";
import { State } from "./state";

export class User {
  constructor(public id: number, public name: string, public country: Country, public state: State,
  public states: any[]) { }
}