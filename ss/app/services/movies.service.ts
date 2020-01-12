import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { interval } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
let headers = new HttpHeaders().append('Authorization', `Bearer Wookie2019`);
let ApiURL = "https://wookie.codesubmit.io/movies";


 @Injectable({
  providedIn: 'root'
})
export class MoviesService  {
   dataSource = new BehaviorSubject<any>({});
    getnewData = this.dataSource.asObservable();
  constructor(public httpClient :HttpClient ) {     }
  
  getAllMovies(){
    return this.httpClient.get(ApiURL,{headers});
   }
   
   searchMovie(items){
    const params = new HttpParams().set('q', items);
    return this.httpClient.get( ApiURL, { params ,headers})
   }
}

