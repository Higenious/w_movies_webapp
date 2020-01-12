import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {MoviesService} from '../../services/movies.service';
import { Observable } from 'rxjs';
let headers = new HttpHeaders().append('Authorization', `Bearer Wookie2019`);
let ApiURL = "https://wookie.codesubmit.io/movies";


@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.css']
})



export class DashbaordComponent implements OnInit {
  myData: any;
  items: any = [];
  result :any;
  value:any;
  filteredData:any=[];
  data:any;
  filtered;
  constructor(private http: HttpClient, public MoviesService:MoviesService, private Router : Router){};
 
  ngOnInit() {
   this.getAllMovies();
   this.MoviesService.getnewData.subscribe(
    (response)=>{
         this.filteredData =response; 
         this.filtered = true;
    }
   );
  }


 getAllMovies(){
   this.MoviesService.getAllMovies().subscribe(
    (data: any) => {
      this.filtered = false;
      console.log('data',data);
      // this.myData = data.movies;
      this.MoviesService.dataSource.next(data.movies);
      this.myData = this.MoviesService.getnewData;
    },
    error => {
      alert("ERROR");
    });
 }


 getDetails(items){
   //console.log('items', JSON.stringify(items));
   items = JSON.stringify(items);
   localStorage.setItem('items',items);
   this.Router.navigate(['/details']);
 }

 
 getgenres(data){
   if(data.genres.includes('Actions')||data.genres.includes('Drama')||data.genres.includes('Adventure')){
     return true
   }else{
    return false;
   }
 }

 
 getgenresone(data){
  if(data.genres.includes('Animation')||data.genres.includes('Family')||data.genres.includes('Romance')){
    return true
  }else{
   return false;
  }
 }


 getgenresthree(data){
  if(data.genres.includes('History')||data.genres.includes('Sci-Fi')){
    return true
  }else{
   return false;
  }
 }

 
}

