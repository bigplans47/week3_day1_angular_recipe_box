import { Component } from '@angular/core';
import { Recipe } from './models/task.model'

@Component({
  selector: 'app-root-crazzzzzy',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  inputTask1: string =prompt('enter recipe name');
  inputTask2: string =prompt('enter recipe ingredients');
  inputTask3: string =prompt('enter recipe directions');
  recipes: Recipe[] = [
    new Recipe('Cheesey Bread','cheese and dough', 'mix cheese and dough tada'),
    new Recipe('Boiled Fish', 'worm on hook plus fishing pole plus 3 hours', 'catch a fish, boil'),
    new Recipe(this.inputTask1, this.inputTask2, this.inputTask3)
  ];
  currentTime = new Date();
  day: number = this.currentTime.getDate();
}
