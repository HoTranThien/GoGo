import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{

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
  // addnumber(){
  //   for(let i=1;i<=50;i++){
  //     this.numbers.push(i);
  //   }
  // }
  // ngOnChanges(changes: SimpleChanges): void {
  //   this.addnumber;
  // }
}
