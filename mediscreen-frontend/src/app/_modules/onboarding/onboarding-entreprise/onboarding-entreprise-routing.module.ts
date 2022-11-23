import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardingEntrepriseComponent } from './pages/onboarding-entreprise/onboarding-entreprise.component';

const routes: Routes = [
  {
    path: '',
    component: OnboardingEntrepriseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingEntrepriseRoutingModule { }
