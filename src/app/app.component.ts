import { Component } from '@angular/core';
import { Recipe } from './models/task.model'

@Component({
  selector: 'app-root-crazzzzzy',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  recipes: Recipe[] = [
    new Recipe('Cheesey Bread', 'cheese and dough', 'mix cheese and dough tada', 9),
    new Recipe('Boiled Fish', 'worm on hook plus fishing pole plus 3 hours', 'catch a fish, boil', 1),
  ];
  selectedRecipe: Recipe= this.recipes[0];
  currentTime = new Date();
  day: number = this.currentTime.getDate();

  addRecipe() {
    alert('add the recipe');
  }
  ratingColor(single) {
    if (single.rating <= 3) {
      return "bg-danger";
    } else if (single.rating > 3 && single.rating <= 7) {
      return "bg-warning";
    } else {
      return "bg-success";
    }
  }
}
