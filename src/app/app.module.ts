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

const routes: Routes = [
  { path: 'main', component: MainComponent},
  { path: 'clouds', component: CloudComponent},
  { path: '', component: MainComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    InputComponent,
    ItemComponent,
    SafePipe,
    CloudComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
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
    MatSelectModule
  ],
  providers: [
    SafePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
