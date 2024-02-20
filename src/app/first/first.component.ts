import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private myservice:MyServiceService) { }

  ngOnInit() {
  }
  shape = ['Select Shape','Rectangle','Square','Circle'];
  color = ['Select Color','Red','Yellow','Blue'];
  selectedshape = this.shape[0];
  selectedcolor= this.color[0];
  selectitem(e:any,type:string){
    if (type=='s')
    {
      this.selectedshape = e.target.innerText;
    }
    else if (type == 'c')
    {
      this.selectedcolor = e.target.innerText;
    }
  }
  drawsketch(){
    this.myservice.drawsketch(this.selectedshape,this.selectedcolor.toLowerCase(),'draw');
  }
}
