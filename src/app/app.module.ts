import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { MatTreeModule } from '@angular/material/tree';
import { FormColorComponent } from './pages/form-color/form-color.component';
import { HomeComponent } from './pages/home/home.component';
import { LookAndFeelRepository } from 'src/core/repositories/lookAndFeel.repository';
import { LookAndFeelService } from 'src/infrastructure/services/look-and-feel.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    FormColorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTooltipModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatTreeModule
  ],
  providers: [
    {provide: LookAndFeelRepository, useClass: LookAndFeelService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
