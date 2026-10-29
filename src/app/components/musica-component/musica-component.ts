import { Component } from '@angular/core';

@Component({
  selector: 'app-musica-component',
  standalone: false,
  styleUrl: './musica-component.css',
  templateUrl: './musica-component.html',
})
export class MusicaComponent {

  constructor() {
    console.log('MusicaComponent constructor');
  }
  
}
