import {AfterContentInit, AfterViewInit, Component} from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.component.html',
  styleUrls: ['./cloud.component.css']
})
export class CloudComponent implements AfterContentInit {
  content: string="";
  words:string[]=[];
  title: string = "";

  constructor(public user:UserService) {

  }

  open_cloud(word: any) {
    this.content=this.user.clouds[word];
    this.title=word;
  }

  refresh(){
    if(this.user) {
      for (let word of Object.keys(this.user.clouds)) {
        this.words.push(word)
      }
    }
  }

  ngAfterContentInit(): void {
    this.refresh();
    this.user.content_change.subscribe({
      next:this.refresh
      })
  }
}
