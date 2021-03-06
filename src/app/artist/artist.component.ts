import { SpotifyService } from './../spotify.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  id: string;
  artist: Object;

  constructor(private route: ActivatedRoute, private spotify: SpotifyService, private location: Location) { 

    route.params.subscribe(params => { this.id = params.id; } );
  }

  ngOnInit(): void {
    this.spotify
      .getArtist(this.id)
      .subscribe((res: any ) => this.renderArtist(res));
  }


  renderArtist(res): void {
    this.artist = res;
  }

}
