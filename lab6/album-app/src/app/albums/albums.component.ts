import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { Album } from '../album'; 
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})

export class AlbumsComponent {
  albums: Album[] = [];
  showInputs: boolean = false;
  newUserId: number | undefined;
  newId: number | undefined;
  newTitle: string | undefined;
  constructor(private albumsService: AlbumsService) {}

  ngOnInit(){
    this.showAlbums();
  }

  showAlbums() {
    this.albumsService.getAlbums()
      .subscribe((data: Album[]) => {
        this.albums = data; // Присваиваем данные ответа непосредственно массиву альбомов
      });
      console.log("Все ок")
  }

  removeAlbum(id: number){
    this.albumsService.deleteAlbum(id).subscribe(() => {
        // Удаление альбома из массива albums после успешного удаления на сервере
        this.albums = this.albums.filter(album => album.id !== id);
        console.log("Альбом успешно удален");
    }, error => {
        console.error("Ошибка при удалении альбома", error);
    });
  }

  toggleInputs(){
    this.showInputs = !this.showInputs;
  }

  addAlbum() {
    if(this.newUserId && this.newId && this.newTitle){
      if(this.albums.find(album => album.id == this.newId)) {
        window.alert('Объект с таким айди уже есть')
      } else {
        const newAlbum: Album = {
          userId: this.newUserId,
          id: this.newId,
          title: this.newTitle
        }
        this.albums.push(newAlbum);
        this.albumsService.addAlbum(newAlbum).subscribe();
        window.alert('Успешно добавлено')
      }
    } else {
      window.alert("Неправильный формат")
    }
  }

}
