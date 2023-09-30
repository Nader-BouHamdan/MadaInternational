import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { AngularMaterial } from '../angular-material.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent,
    TopBarComponent,
    BottomBarComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngularMaterial
  ]
})
export class HomeModule { }
