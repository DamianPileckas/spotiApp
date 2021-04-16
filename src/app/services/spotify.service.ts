import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    
  }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQD4FKqT2_AYie1X-HUwcjBbwkCfRzzRWfr25-l4EM_d_2F5BwWPmY-w8_X9zcOFMFsdchQQqAanoD1Thks'
    });
    
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }

  getArtista(termino: string){
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQD4FKqT2_AYie1X-HUwcjBbwkCfRzzRWfr25-l4EM_d_2F5BwWPmY-w8_X9zcOFMFsdchQQqAanoD1Thks'
    });
    
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers });
  }
}
