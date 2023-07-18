import {Component, OnInit} from '@angular/core';
import * as yaml from 'js-yaml';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  data:any
  contents: any[]=[];

  constructor(private http: HttpClient) {
  }

  loadYamlFile() {
    this.http.get('assets/content.yaml', { responseType: 'text' }).subscribe((data: string) => {
          this.data = yaml.load(data);
          this.contents=this.data.content;
        });
  }



  ngOnInit(): void {
        this.loadYamlFile()
  }



}
