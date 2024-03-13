import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from './album';
import { Photo } from './photo';
import { Observable, catchError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  albumsUrl = 'https://jsonplaceholder.typicode.com/albums';
  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]>{
    return this.http.get<Album[]>(this.albumsUrl);
  }

  getAlbumById(id: number): Observable<Album>{
    const url = `${this.albumsUrl}/${id}`;
    return this.http.get<Album>(url)
  }

  deleteAlbum(id: number): Observable<Album> {
    const url = `${this.albumsUrl}/${id}`;
    return this.http.delete<Album>(url);
  }

  updateAlbum(album: Album): Observable<Album>{
    const url = `${this.albumsUrl}/${album.id}`;
    return this.http.put<Album>(url, album);
  }

  getPhotos(albumId: number): Observable<Photo[]>{
    const url = `${this.albumsUrl}/${albumId}/photos`;
    return this.http.get<Photo[]>(url);
  }

  addAlbum(album: Album): Observable<Album> {
    return this.http.post<Album>(this.albumsUrl, album);
  }
}
