import { State } from "./state";

export class Country {
  constructor(
    public id: number, 
    public name: string, 
    public state: State
  ) { }
}
