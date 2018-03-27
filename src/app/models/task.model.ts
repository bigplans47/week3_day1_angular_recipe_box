export class Recipe {
  public show: boolean = false
  constructor(public title: string, public ingredients: string, public directions: string, public rating: number) { }
}
