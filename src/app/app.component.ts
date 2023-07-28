import {Component, OnInit} from '@angular/core';
import * as yaml from "js-yaml";
import {UserService} from "./user.service";
import {HttpClient} from "@angular/common/http";
import {getParams} from "../tools";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SustainPlus';

  constructor(public user:UserService,
              public routes:ActivatedRoute,
              public http:HttpClient) {
  }


  async ngOnInit() {
    this.http.get('assets/content.yaml', { responseType: 'text' }).subscribe(async (yml: string) => {
      let data:any = yaml.load(yml);
      if(data){
        this.user.init(data)
        let params:any=await getParams(this.routes)
        if(params.pass==this.user.authentification.password)this.user.landing_page="";
      }

    });
  }

}
