import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private token: any;


  constructor(private http: HttpClient) { 
    this.getToken()
      .subscribe(resp => {
        this.token = resp;
      });  
  }
  
  getQuery( query: string){
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${this.token.access_token}`
    });

    return this.http.get(url, {headers});
  }

  getNewReleases(){
    
    return this.getQuery('browse/new-releases?limit=20')
      .pipe( map( data => data['albums'].items));  
  }

  getArtistas(termino: string){
    
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
      .pipe( map( data => data['artists'].items));
  }

  getArtist(id: string){
    
    return this.getQuery(`artists/${id}`);
      //.pipe( map( data => data['artists'].items));
  }
  
  getTopTracks(id: string){
    return this.getQuery(`artists/${id}/top-tracks?market=us`)
      .pipe( map( data => data['tracks']));
  }

  getToken(): any {
    return this.http.get(`https://spotify-ar-api.herokuapp.com/spotify/49c58326fd8e4b62a56efd9732327ada/1ac83de3b84f4d828845bdda1743d561`);
  }
}


