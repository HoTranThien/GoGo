import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  numbers:number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
    21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,
    41,42,43,44,45,46,47,48,49,50];
isdiv2 = false
isdiv3 = false;
isdiv5 = false;
isdiv10 = false;
state:number =0;
signal(a:string)
{
switch (a){
case 'div2': 
this.setFalse();
this.isdiv2 = true;
this.state=2;
break;
case 'div3': this.setFalse(),this.isdiv3 = true, this.state=3 ;
break;
case 'div5': this.setFalse(), this.isdiv5 = true, this.state=5;
break;
case 'div10': this.setFalse(), this.isdiv10 = true, this.state=10;
break;
case 'clear': this.setFalse(), this.state=0;
break;
}
}
setFalse(){
this.isdiv2 = false;
this.isdiv3 = false;
this.isdiv5 = false;
this.isdiv10 = false;
}
}
