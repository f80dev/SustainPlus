import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public content:any[]=[]
  public clouds:any={}
  landing_page: string=""
  authentification: any={}
  params:any;
  content_change = new Subject<any>();


  constructor() { }

  init(data:any){
    this.content=data.content
    this.clouds=data.clouds
    this.landing_page=data.landing_page
    this.authentification=data.authentification

    this.content_change.next(data)
  }

}
