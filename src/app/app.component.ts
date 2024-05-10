import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HighlightDirective } from './highlight.directive';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';

export interface Shoppingitem {
  name: string;
  description: string;
  id: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    ShoppingItemComponent,
    HighlightDirective,
    NgClass,
    FormsModule,
    NgIf,
    NgFor,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ang-3';
  headerTitle = 'myApp';
  isSpecial = true;
  isInteresting = true;
  headingVisible = true;

  shoppingList: Shoppingitem[] = [
    {
      name: 'Bread',
      description: 'Gluten Free',
      id: 1,
    },
    {
      name: 'Milk',
      description: 'Lactose Free',
      id: 2,
    },
    {
      name: 'Corn Syrup',
      description: 'Sugar Free',
      id: 3,
    },
  ];

  onDeleteFromList(id: number) {
    this.shoppingList = this.shoppingList.filter((item) => item.id !== id);
  }

  listTrackBy(index: number, item: Shoppingitem) {
    return item.id;
  }
}
