import { Component } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
   showGif() {
    var gifContainer = document.querySelector('.gif img') as HTMLElement;
    gifContainer.style.display = 'block';
    let audio = document.getElementById('audio') as HTMLAudioElement;
    audio.play();
    setTimeout(function(){
      gifContainer.style.display = 'none';
      audio.pause();
    }, 1000)
    }
}
