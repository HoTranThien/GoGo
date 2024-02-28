import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(private httpservice:MyServiceService) { }

  users:any;
  url = "https://api.github.com/users";
  
  ngOnInit() {
    this.httpservice.gethttp(this.url).subscribe(data =>{this.users = data});
  }
  opentab(url:string){
    window.open(url,"_blank");
  }
}
