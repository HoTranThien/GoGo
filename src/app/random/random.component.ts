import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  input:string ="";
  output:string = "";
  num:number = 0;
  random(myinput:string){
    let array = myinput.replaceAll(" ","").split(",");
    let result:string[] = [];
    for(let i = 0; i < this.num; i++)
    {
      let index = Math.floor(Math.random()*array.length)
      let word = array[index];
      array.splice(index,1);
      result.push(word);
    }
    this.output = result.toString().replaceAll(",",", ");
  }
}
