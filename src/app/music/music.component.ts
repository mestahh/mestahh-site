import { Component, OnInit } from '@angular/core';
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  playlists: any = [];

  constructor(private musicService: MusicService) { }

  ngOnInit() {
    this.musicService.getPlaylists().subscribe((playlists: any[]) => {
      this.playlists = playlists;
    });
  }

}
