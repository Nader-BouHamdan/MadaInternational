import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ConsultingComponent } from './pages/consulting/consulting.component';
import { AboutComponent } from './pages/about/about.component';
import { AssessmentsAndEvaluationsComponent } from './pages/assessments-and-evaluations/assessments-and-evaluations.component';
import { ReportingComponent } from './pages/reporting/reporting.component';
import { TrainingAndCapacityBuildingComponent } from './pages/training-and-capacity-building/training-and-capacity-building.component';
import { ProposalWritingAndFundraisingComponent } from './pages/proposal-writing-and-fundraising/proposal-writing-and-fundraising.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'consulting',
    component: ConsultingComponent
  },
  {
    path: 'analysis',
    component: AssessmentsAndEvaluationsComponent
  },
  {
    path: 'reporting',
    component: ReportingComponent
  },
  {
    path: 'training',
    component: TrainingAndCapacityBuildingComponent
  },
  {
    path: 'proposal-writing',
    component: ProposalWritingAndFundraisingComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    redirectTo: 'main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
