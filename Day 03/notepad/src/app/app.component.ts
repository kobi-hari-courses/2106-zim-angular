import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //DATA
  colors: string[] = ['Red', 'Green', 'Blue', 'Purple', 'Brown', 'Black'];
  sizes: string[] = ['14px', '24px', '32px', '42px', '70px'];
  fonts: string[] = ['Segoe UI', 'Verdana', 'Times new Roman', 'David', 'Consolas', 'Arial'];

  selectedColor: string = this.colors[0];
  selectedSize: string = this.sizes[0];
  selectedFont: string = this.fonts[0];

  // METHODS
  selectColor(value: string) {
    console.log('selecting color: ' + value);
    this.selectedColor = value;
  }

  selectFont(value: string) {
    this.selectedFont = value;
  }

  selectSize(value: string) {
    this.selectedSize = value;
  }

}
