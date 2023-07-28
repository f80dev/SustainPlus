import {Component, OnInit} from '@angular/core';
import * as yaml from 'js-yaml';
import { HttpClient } from '@angular/common/http';
import {UserService} from "../user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {getParams, showMessage} from "../../tools";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  password: any = "";

  constructor(public user:UserService,
              public toast:MatSnackBar,
              public routes:ActivatedRoute,
              public router:Router) {
  }

  open_clouds() {
    this.router.navigate(["clouds"])
  }

  async open_appli() {

    if(this.password==this.user.authentification.password){
      this.user.landing_page=''
    } else {
      showMessage(this,"Mot de passe incorrect")
    }
  }

  async ngOnInit() {

  }
}
