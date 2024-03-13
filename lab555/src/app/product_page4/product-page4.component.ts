import { Component } from '@angular/core';
import { products4} from "../products4";
import {Product} from "../products";

@Component({
  selector: 'app-product-page4',
  templateUrl: './product-page4.component.html',
  styleUrls: ['./product-page4.component.css']
})
export class ProductPage4Component {
  products=[...products4]

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