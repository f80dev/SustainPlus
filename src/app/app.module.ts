import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


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

const routes: Routes = [
  { path: 'main', component: MainComponent},
  { path: '', component: MainComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ItemComponent,
    SafePipe
  ],
    imports: [
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
        MatButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
