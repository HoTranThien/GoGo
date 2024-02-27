import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = 'GoGo';
  myname:string = "Tran Thien Ho";
  url = "https://i.pinimg.com/236x/13/5d/70/135d7021a392276721ad8629a9e5a3dd.jpg";
  url2 = "https://i.pinimg.com/236x/5f/60/7f/5f607f309d5073a51141cc7bb84bc926.jpg";
  result:string="";

  Check(){
    const btn = document.querySelector("button");
    console.log(btn);
    if(this.result == "submitted"){
      btn?.removeAttribute("enabled");
      btn?.setAttribute("disabled","");
    }
  }
}
