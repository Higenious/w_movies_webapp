import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import {HttpClientModule} from '@angular/common/http';
import {MoviesService} from '../../src/app/services/movies.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  items:any;
  filteredData :any;
  searchChangeObserver;
  userInput: any;
  searchValue:any;
  constructor(private httpCleint:HttpClientModule, private MoviesService:MoviesService, public Router:Router){}
  ngOnInit(){

  }

  onSearchChange(items) {
    this.MoviesService.searchMovie(items).subscribe(data=>{
      if(data){
        console.log('data** search result', data);
         this.filteredData = data;
         if(data){
          this.MoviesService.dataSource.next(this.filteredData);
          localStorage.setItem('filteredData', this.filteredData);   
         }
      }else{ 
        console.log('No Data found');
      }
    })
  }


  // remove search bar in details page
  isHome(): boolean {
    const check = this.Router.url.indexOf('/details');
    if (check) {
        return true;
    }
    return false;
  }
}