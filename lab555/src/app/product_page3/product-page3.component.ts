import { Component } from '@angular/core';
import { products3} from "../products3";
import {Product} from "../products";

@Component({
  selector: 'app-product-page3',
  templateUrl: './product-page3.component.html',
  styleUrls: ['./product-page3.component.css']
})
export class ProductPage3Component {
  products=[...products3]

  share(product: Product){
    window.open(`https://t.me/share/url?url=${encodeURIComponent(product.link)}`);
  }
  likedProducts: boolean[] = [];

  toggleLike(index: number) {
    if (this.likedProducts[index]) {
      this.products[index].numberOfLikes--; // Уменьшаем количество лайков, если кнопка была уже нажата
    } else {
      this.products[index].numberOfLikes++; // Увеличиваем количество лайков, если кнопка была не нажата
    }
    this.likedProducts[index] = !this.likedProducts[index]; // Изменяем состояние кнопки лайка
  }
  deleteButton(index:number){
    this.products.splice(index,1)
  }
}