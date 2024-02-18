import { Component, OnInit, Output ,EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent{

  constructor() { }
  @Output()
  sendmessagetoparent = new EventEmitter();

  @Input() filter = 'all';

  itemchosen = '0';
  data=[{name:'Green',type:'color'},{name:'Dog',type:'animal'},{name:'Apple',type:'fruit'},
        {name:'Mango',type:'fruit'},{name:'Yellow',type:'color'},{name:'Cat',type:'animal'},
        {name:'Blue',type:'color'},{name:'Red',type:'color'},{name:'Cow',type:'animal'},
        {name:'Goat',type:'animal'},{name:'Black',type:'color'},{name:'Banana',type:'fruit'},
        {name:'Cherry',type:'fruit'}];
  ShowMessage(e:any){
   this.itemchosen = e.target.innerText;
   this.sendmessagetoparent.emit(e.target.innerText);
  }
}
