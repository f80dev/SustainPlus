import {Component, OnInit} from '@angular/core';
import * as yaml from "js-yaml";
import {UserService} from "./user.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SustainPlus';

  constructor(public user:UserService,public http:HttpClient) {
  }


  ngOnInit(): void {
    this.http.get('assets/content.yaml', { responseType: 'text' }).subscribe((yml: string) => {
      let data:any = yaml.load(yml);
      if(data){
        this.user.init(data)
      }

    });
  }

}
