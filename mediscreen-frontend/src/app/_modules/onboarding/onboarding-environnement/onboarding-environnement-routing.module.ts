import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardingEnvironnementComponent } from './pages/onboarding-environnement/onboarding-environnement.component';

const routes: Routes = [
  {
    path: '',
    component: OnboardingEnvironnementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingEnvironnementRoutingModule { }
