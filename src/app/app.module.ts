import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ItemComponent } from './item/item.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import { SafePipe } from './safe.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import {MatButtonModule} from "@angular/material/button";
import { CloudComponent } from './cloud/cloud.component';
import {MatIconModule} from "@angular/material/icon";
import {InputComponent} from "./input/input.component";
import {MatSliderModule} from "@angular/material/slider";
import {MatListModule} from "@angular/material/list";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {AboutComponent} from "./about/about.component";
import {StyleManagerService} from "./style-manager.service";
import {PromptComponent} from "./prompt/prompt.component";
import {MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {FilterPipe} from "./filter.pipe";

const routes: Routes = [
  { path: 'main', component: MainComponent},
  { path: 'clouds', component: CloudComponent},
  { path: 'about', component: AboutComponent},
  { path: '', component: MainComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    PromptComponent,
    InputComponent,
    ItemComponent,
    SafePipe,FilterPipe,
    CloudComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatExpansionModule,
    RouterOutlet,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    MatButtonModule,
    MatIconModule,
    MatSliderModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,

  ],
  providers: [
    SafePipe,StyleManagerService,FilterPipe,
    {provide: MAT_DIALOG_DATA, useValue: {hasBackdrop: false}},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
