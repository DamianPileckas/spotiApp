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
      'Authorization':'Bearer BQC1cEdWb-4IWjsHLhjNZUHf-nGNMsfTNWB_QMK7KNZ6nt13UrdlIbVsHGL-bLdPsDU3g561JdF9OBtMuPY'
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
