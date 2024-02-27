import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit {

  constructor() { }

  @ViewChild('inp',{static:true}) myinput? : ElementRef;
  @ViewChild('viewch',{static:true}) myviewchild? : any;
  ngOnInit(){
    this.myinput?.nativeElement.focus(); 
  }
  usechild(input:any){
    console.log(input);
  }
  @ViewChild('result') re:any;
  numcharacter?:number;
  vcA?:number;
  vcE?:number;
  vcI?:number;
  vcO?:number;
  vcU?:number;
  ExportResult(e:any){
    let inputted:string = e.target.value;
    this.numcharacter = inputted.length;
    this.vcA = this.countcharacter(inputted,'a');
    this.vcE = this.countcharacter(inputted,'e');
    this.vcI = this.countcharacter(inputted,'i');
    this.vcO = this.countcharacter(inputted,'o');
    this.vcU = this.countcharacter(inputted,'u');
  }
  countcharacter(string:string,character:string){
    const reg = new RegExp(character,'gi');
    return Array.from(string.matchAll(reg)).length;
  }

}
