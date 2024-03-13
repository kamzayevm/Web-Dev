import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Album } from '../album';
import { Photo } from '../photo';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent {
  albumId: number | undefined;
  photos: Photo[] = [];
  constructor(
    private albumsService: AlbumsService,
    private route: ActivatedRoute
    ){}

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    this.albumId = Number(routeParams.get('id'));
    this.albumsService.getPhotos(this.albumId).subscribe((data: Photo[]) => this.photos = data );
  }
}
