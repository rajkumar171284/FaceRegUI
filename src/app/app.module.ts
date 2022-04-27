import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './components/landing/landing.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { WebcamModule } from 'ngx-webcam';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { HttpClientModule } from '@angular/common/http';
import {FaceApiService} from './face-api.service';
import { SafepipePipe } from './safepipe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AdminPanelComponent,
    SafepipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, FormsModule,
    ReactiveFormsModule,
    WebcamModule, HttpClientModule
  ],
  providers: [HttpClientModule,FaceApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
