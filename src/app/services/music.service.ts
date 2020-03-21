import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class MusicService {

    constructor(private httpClient:HttpClient) {

    }

    getPlaylists() {
      return this.httpClient.get('https://q3ycamx9j2.execute-api.eu-west-1.amazonaws.com/dev/playlists');
    }
}