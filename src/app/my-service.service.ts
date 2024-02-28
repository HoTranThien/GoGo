import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

constructor(private http:HttpClient) { }
drawsketch(shape:string, color:string, divclass:string){

  const div = document.getElementsByClassName(divclass)[0];
  switch(shape)
  {
    case 'Rectangle': div.setAttribute('style',`height: 100px;width: 200px;background-color: ${color};`);
    break;
    case 'Square': div.setAttribute('style',`height: 100px;width: 100px;background-color: ${color};`);
    break;
    case 'Circle': div.setAttribute('style',`height: 100px;width: 100px;background-color: ${color};border-radius: 50%;`)
    break;
  }
}

gethttp(url:string){
  return this.http.get(url);
}
}
