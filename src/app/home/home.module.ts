import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import { AngularMaterial } from '../angular-material.module';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConsultingComponent } from './pages/consulting/consulting.component';
import { AssessmentsAndEvaluationsComponent } from './pages/assessments-and-evaluations/assessments-and-evaluations.component';
import { ReportingComponent } from './pages/reporting/reporting.component';
import { TrainingAndCapacityBuildingComponent } from './pages/training-and-capacity-building/training-and-capacity-building.component';
import { ProposalWritingAndFundraisingComponent } from './pages/proposal-writing-and-fundraising/proposal-writing-and-fundraising.component';
import { MainComponent } from './pages/main/main.component';
import { AboutComponent } from './pages/about/about.component';


@NgModule({
  declarations: [
    HomeComponent,
    TopBarComponent,
    BottomBarComponent,
    ConsultingComponent,
    AssessmentsAndEvaluationsComponent,
    ReportingComponent,
    TrainingAndCapacityBuildingComponent,
    ProposalWritingAndFundraisingComponent,
    MainComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngularMaterial,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class HomeModule { }
