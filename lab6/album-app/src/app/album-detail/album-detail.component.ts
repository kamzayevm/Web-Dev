import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Album } from '../album';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent {
  album: Album | undefined;
  newTitle: string = '';
  constructor(
    private albumsService: AlbumsService,
    private route: ActivatedRoute
    ){}

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    const albumIdFromRoute = Number(routeParams.get('id'));
    this.albumsService.getAlbumById(albumIdFromRoute).subscribe(data => this.album = data);
  }

  updateTitle(){
    if (this.album) { 
      this.album.title = this.newTitle;
      this.albumsService.updateAlbum(this.album).subscribe();
    } 
  }
}
