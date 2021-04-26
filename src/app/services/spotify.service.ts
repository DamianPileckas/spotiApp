import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    
  }
  
  getQuery( query: string){
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQBwoot7wERQs6m-GmB3_Bcb2RvMtFZsXLBRZHCTv1rXB6msAJr-j0hDmme5oCQCPytOPoG38W_xMrciiVE'
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
}
