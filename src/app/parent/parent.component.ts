import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent{

  constructor() { }
  field = "All";
  messagetochildren = 'all';
  item = '';
  ChangeColor(e:any){
    this.field = e.target.innerText;
    switch(e.target.innerText)
    {
      case 'Colors':this.messagetochildren = 'color';
      break;
      case 'Animals':this.messagetochildren = 'animal';
      break;
      case 'Fruits':this.messagetochildren = 'fruit';
      break;
      case 'All':this.messagetochildren = 'all';
      break;
    }
  }

  receivemessage(e:any){
    this.item = e;
  }
}
