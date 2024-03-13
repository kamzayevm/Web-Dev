
import { Component, Input } from '@angular/core';
import { products2} from "../products2";
import {Product} from "../products";

@Component({
  selector: 'app-product-page2',
  templateUrl: './product-page2.component.html',
  styleUrls: ['./product-page2.component.css']
})
export class ProductPage2Component {
  products=[...products2]
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

