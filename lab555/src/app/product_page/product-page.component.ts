import { Component } from '@angular/core';
import {Product, products} from "../products";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  products=[...products]

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