import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../services/movies.service';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
  result:any;
  sub :any;
  title:any;
  constructor(private http: HttpClient, public MoviesService:MoviesService, private Router : Router,private route: ActivatedRoute){};

  ngOnInit() {
    this.result = JSON.parse(localStorage.getItem('items'));
    console.log('result', this.result);
  }
 
  showDetails(urlArr){
    this.MoviesService.searchMovie(urlArr).subscribe((data:any)=>{
      console.log('res',data);
      this.result = data;
    },error=>{
      alert('err');
    })
    }

  
}
