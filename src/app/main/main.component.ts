import {Component, OnInit} from '@angular/core';
import * as yaml from 'js-yaml';
import { HttpClient } from '@angular/common/http';
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {showMessage} from "../../tools";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  {
  password: any = "";

  constructor(public user:UserService,
              public toast:MatSnackBar,
              public router:Router) {
  }

  open_clouds() {
    this.router.navigate(["clouds"])
  }

  open_appli() {
    if(this.password==this.user.authentification.password){
      this.user.landing_page=''
    } else {
      showMessage(this,"Mot de passe incorrect")
    }
  }
}
