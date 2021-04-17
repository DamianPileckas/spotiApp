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
      'Authorization':'Bearer BQAiOvteOB1pfKzhRgxxj9_SKuzob_shaDHFBLXgGM7TFH-0qbKDp4eoGQN7krMy3PCDwbKQOHkS3ETHaUA'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases(){
    
    return this.getQuery('browse/new-releases?limit=20')
      .pipe( map( data => data['albums'].items));  
  }

  getArtista(termino: string){
    
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
      .pipe( map( data => data['artists'].items));
  }
}
