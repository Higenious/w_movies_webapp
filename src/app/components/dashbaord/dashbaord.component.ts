import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {MoviesService} from '../../services/movies.service';
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
  constructor(private http: HttpClient, public MoviesService:MoviesService, private Router : Router){};
 
  ngOnInit() {
  this.getAllMovies();
  }

 getAllMovies(){
   this.MoviesService.getAllMovies().subscribe(
    (data: any) => {
      console.log('data',data);
      this.myData = data.movies;
    },
    error => {
      alert("ERROR");
    });
 }

 getDetails(items){
   console.log('items', items);
  // this.Router.navigate(['/details', { items }]);
 }
}
